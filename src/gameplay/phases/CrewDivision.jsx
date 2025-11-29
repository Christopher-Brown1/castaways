import { useContext } from "react"

import { PlayerCard } from "../../global/players/PlayerCard"
import { StateContext } from "../../lib/StateContext"
import style from "../gameplay.module.css"

export const CrewDivision = () => {
  const { state } = useContext(StateContext)

  return (
    <div
      className={style.playerDeck}
      style={{ width: "760px", margin: "64px auto" }}
    >
      <h2 className={style.headerText}>Players</h2>
      <div className={style.cardsContainer}>
        {state.players.map((player) => (
          <PlayerCard phase={state.phase} player={player} />
        ))}
      </div>
    </div>
  )
}
