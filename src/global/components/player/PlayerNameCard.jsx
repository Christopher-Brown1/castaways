import style from "./PlayerNameCard.module.css"

export const PlayerNameCard = ({ player }) => {
  return (
    <div
      className={style.playerNameCard}
      style={{ backgroundColor: player.color }}
    >
      <h3 className={style.playerNameText}>{player.name}</h3>
    </div>
  )
}
