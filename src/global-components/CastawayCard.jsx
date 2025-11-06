import style from "./CastawayCard.module.css"
// import { CASTAWAYS } from "../gameConsts"
import lifeMeter from "../assets/lifeMeter.svg"

export const CastawayCard = ({ castaway }) => {
  return (
    <>
      <div className={style.cardContainer}>
        <div className={style.cardHeader}>
          <h3 className={style.headerText}>{castaway.name}</h3>
          <div className={style.healthContainer}>
            <img src={lifeMeter} />
            <p className={style.healthText}>{castaway.health || 10}</p>
          </div>
        </div>
        <div className={style.cardBody}>
          <div
            className={style.attributeContainer}
            style={{
              backgroundColor: "var(--system-red)",
              borderColor: "var(--system-red)",
            }}
          >
            <p className={style.attributeText}>Physical</p>
            <p className={style.attributeText}>
              {castaway.archetypes?.physical || 10}
            </p>
          </div>
          <div
            className={style.attributeContainer}
            style={{
              backgroundColor: "var(--system-blue)",
              borderColor: "var(--system-blue)",
            }}
          >
            <p className={style.attributeText}>Mental</p>
            <p className={style.attributeText}>
              {castaway.archetypes?.mental || 36}
            </p>
          </div>
          <div
            className={style.attributeContainer}
            style={{
              backgroundColor: "var(--system-green)",
              borderColor: "var(--system-green)",
            }}
          >
            <p className={style.attributeText}>Social</p>
            <p className={style.attributeText}>
              {castaway.archetypes?.social || 10}
            </p>
          </div>
          <div
            className={style.attributeContainerBig}
            style={{
              backgroundColor: "var(--system-grey)",
              borderColor: "var(--player-grey)",
            }}
          >
            <p className={style.attributeText}>{castaway.traits?.age || 21}</p>
            <p className={style.attributeText}>
              {castaway.traits?.status || 21}
            </p>
            <p className={style.attributeText}>
              {castaway.traits?.behavior || 21}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
