import style from "../global-components/tribeDeck.module.css"
import { PlayerNameCard } from "./PlayerNameCard"
import { CastawayCard } from "./CastawayCard"

export const TribeDeck1 = ({ players }) => {
  return (
    <div className={style.tribeDeck}>
      <div className={style.deckHeader}>
        <h2 className={style.headerText}>Purple Tribe</h2>
        <div className={style.playersContainer}>
          {players
            .filter((player) => player.tribe === "purple")
            .map((player, index) => (
              <PlayerNameCard key={index} player={player} />
            ))}
        </div>
      </div>
      <div className={style.castawaysContainer}>
        {players
          .filter((player) => player.tribe === "purple")
          .reduce((acc, player) => {
            const newAcc = [...acc]
            player.castaways.forEach((castaway) => {
              const idx = Math.floor(Math.random() * (newAcc.length + 1))
              newAcc.splice(idx, 0, castaway)
            })
            return newAcc
          }, [])
          .map((castaway, index) => (
            <CastawayCard key={index} castaway={castaway} />
          ))}
      </div>
    </div>
  )
}
