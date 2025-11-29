import { useContext } from "react"

import { CrewDeck } from "../gameplay/crewDeck/CrewDeck"
import style from "./gameplay.module.css"
import { EnterGame } from "./phases/EnterGame"
import { CrewDivision } from "./phases/CrewDivision"

import { PHASES } from "../lib/consts"
import { StateContext } from "../lib/StateContext"

const BOARD_PHASES = [
  "event",
  "lineup",
  "challenge",
  "strategize",
  "summitTwist",
  "summitCards",
  "summitVote",
]

export const Gameplay = () => {
  const { state, setPhase } = useContext(StateContext)

  if (state.loading) {
    return (
      <div>
        <h1>Welcome to StarStruck</h1>
        <h3>Start a new game now.</h3>
        <button onClick={() => setPhase(PHASES.ENTER_GAME)}>Start Game</button>
      </div>
    )
  }
  return (
    <>
      {state.phase === PHASES.ENTER_GAME && <EnterGame />}

      {state.phase === PHASES.CREW_DIVISION && <CrewDivision />}

      {state.phase === PHASES.CONTESTANT_REVEAL && (
        <div className={style.deckContainer}>
          <CrewDeck players={state.players} color="purple" />
          <CrewDeck players={state.players} color="yellow" />
        </div>
      )}

      {BOARD_PHASES.includes(state.phase) && (
        <div className={style.deckContainer}>
          {/* TODO add boolean toggle for merge */}
          <CrewDeck players={state.players} color="purple" />
          <CrewDeck players={state.players} color="yellow" />
        </div>
      )}
    </>
  )
}
