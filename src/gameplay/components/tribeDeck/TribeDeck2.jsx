import style from "../tribeDeck/tribeDeck.module.css"
import { CastawayCard } from "../../../global/components/CastawayCard"
import { PlayerNameCard } from "../../../global/components/player/PlayerNameCard"

export const TribeDeck2 = ({ players }) => {
  return (
    <div className={style.tribeDeck2}>
      <div className={style.castawaysContainer}>
        {players
          .filter((player) => player.tribe === "yellow")
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
      <div className={style.deckHeader}>
        <div className={style.playersContainer}>
          {players
            .filter((player) => player.tribe === "yellow")
            .map((player, index) => (
              <PlayerNameCard key={index} player={player} />
            ))}
        </div>
        <h2 className={style.headerText}>Yellow Tribe</h2>
      </div>
    </div>
  )
}
