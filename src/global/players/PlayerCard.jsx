import style from "../players/playerCard.module.css"
import { PHASES } from "../../gameConsts"
import alien from "../assets/alien.svg"
import helmet from "../assets/helmet.svg"
import microscope from "../assets/microscope.svg"
import moon from "../assets/moon.svg"
import rocket from "../assets/rocket.svg"
import satellite from "../assets/satellite.svg"
import stars from "../assets/stars.svg"
import sun from "../assets/sun.svg"

const ICONS = {
  alien: alien,
  helmet: helmet,
  microscope: microscope,
  moon: moon,
  rocket: rocket,
  satellite: satellite,
  stars: stars,
  sun: sun,
}

const CREW_COLORS = {
  purple: "var(--crew-purple)",
  yellow: "var(--crew-yellow)",
}

export const PlayerCard = ({ phase, player }) => {
  return (
    <div
      className={style.playerCard}
      style={{ border: `4px solid ${player.color}` }}
    >
      <img
        src={ICONS[player.icon]}
        alt="Player Icon"
        // className={style.playerIcon}
      />
      <div className={style.playerInfo}>
        <div
          className={style.nameContainer}
          style={{ background: `${player.color}` }}
        >
          <h3 className={style.infoText}>{player.name}</h3>
        </div>
        {phase === PHASES.CREW_DIVISION && player.revealed && (
          <div
            className={style.crewContainer}
            style={{ background: `${CREW_COLORS[player.crew]}` }}
          >
            <h3 className={style.infoText}>{player.crew}</h3>
          </div>
        )}
      </div>
    </div>
  )
}
