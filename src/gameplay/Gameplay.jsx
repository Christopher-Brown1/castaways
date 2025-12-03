import { useContext } from "react"

import { EnterGame } from "./phases/EnterGame"
import { CrewDivision } from "./phases/CrewDivision"
import { ContestantReveal } from "./phases/ContestantReveal"

import { PHASES } from "../gameConsts"
import { StateContext } from "../lib/StateContext"
import { BoardPhases } from "./phases/BoardPhases"

const BOARD_PHASES = [
  PHASES.EVENT,
  PHASES.LINEUP,
  PHASES.CHALLENGE,
  PHASES.STRATEGIZE,
  PHASES.SUMMIT_TWIST,
  PHASES.SUMMIT_CARDS,
  PHASES.SUMMIT_VOTE,
]

export const Gameplay = () => {
  const { state } = useContext(StateContext)

  return (
    <>
      {state.phase === PHASES.ENTER_GAME && <EnterGame />}

      {state.phase === PHASES.CREW_DIVISION && <CrewDivision />}

      {state.phase === PHASES.CONTESTANT_REVEAL && <ContestantReveal />}

      {BOARD_PHASES.includes(state.phase) && <BoardPhases />}
    </>
  )
}
