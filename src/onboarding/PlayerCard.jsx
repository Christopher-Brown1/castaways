import style from "../onboarding/playerCard.module.css"

import coconut from "../global/assets/coconut.svg"
import crab from "../global/assets/coconut.svg"
import fire from "../global/assets/coconut.svg"
import fish from "../global/assets/coconut.svg"
import island from "../global/assets/coconut.svg"
import machete from "../global/assets/coconut.svg"
import snake from "../global/assets/coconut.svg"
import torch from "../global/assets/coconut.svg"

const iconMap = {
  coconut,
  crab,
  fire,
  fish,
  island,
  machete,
  snake,
  torch,
}

export const PlayerCard = ({ player }) => {
  return (
    <div className={style.playerCard} style={{ backgroundColor: player.color }}>
      <h3 className={style.playerName}>{player.name}</h3>
      <img
        src={iconMap[player.icon]}
        alt='Player Icon'
        className={style.playerIcon}
      />
    </div>
  )
}
