import { useContext } from "react"
import style from "../crewDeck/crewDeck.module.css"
import { StateContext } from "../../lib/StateContext"
import { PlayerNameCard } from "../../global/players/PlayerNameCard"
import { ContestantCard } from "../../global/contestants/ContestantCard"
import { PHASES } from "../../gameConsts"

export const CrewDeck = ({ color }) => {
  const { state } = useContext(StateContext)

  return (
    <div className={style.crewDeck}>
      <div className={style.deckHeader}>
        <div
          className={style.headerTab}
          style={{
            border: `2px solid var(--crew-${color})`,
            background: `var(--crew-${color}-fill)`,
          }}
        >
          <h2
            className={style.headerText}
            style={{ color: `var(--crew-${color})` }}
          >
            {color} Crew
          </h2>
        </div>
        <div className={style.playersContainer}>
          {state.players
            .filter((player) => player.crew === color)
            .map((player, index) => (
              <PlayerNameCard key={index} player={player} />
            ))}
        </div>
      </div>
      <div
        className={style.contestantsContainer}
        style={{
          border: `2px solid var(--crew-${color})`,
          background: `var(--crew-${color}-fill)`,
        }}
      >
        {state.phase === PHASES.CONTESTANT_REVEAL
          ? state.players
              .filter((player) => player.crew === color)
              .reduce((acc, player) => {
                return [...acc, ...player.contestants]
              }, [])
              .sort((a, b) => {
                if (a.attribute.type === "body") return -1
                if (b.attribute.type === "body") return 1
                if (a.attribute.type === "persona") return -1
                if (b.attribute.type === "persona") return 1
                if (a.attribute.type === "mind") return -1
                if (b.attribute.type === "mind") return 1
                return 0
              })
              .map((contestant, index) => (
                <ContestantCard key={index} contestant={contestant} />
              ))
          : state.players
              .filter((player) => player.crew === color)
              .reduce((acc, player) => {
                return [...acc, ...player.contestants]
              }, [])
              .map((contestant, index) => (
                <ContestantCard key={index} contestant={contestant} />
              ))}
      </div>
    </div>
  )
}
