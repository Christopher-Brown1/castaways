import style from "../contestants/contestantCard.module.css"
import lifeMeter from "../assets/lifeMeter.svg"

const TYPE_COLORS = {
  body: "var(--contestant-orange)",
  mind: "var(--contestant-purple)",
  persona: "var(--contestant-green)",
}

export const ContestantCard = ({ contestant }) => {
  return (
    <>
      <div
        className={style.cardContainer}
        style={{
          border: `4px solid ${TYPE_COLORS[contestant.attribute.type]}`,
        }}
      >
        <div className={style.healthContainer}>
          <img src={lifeMeter} />
          <p className={style.healthText}>{contestant.health || 10}</p>
        </div>
        <h3
          className={style.headerText}
          style={{ color: TYPE_COLORS[contestant.attribute.type] }}
        >
          {contestant.name}
        </h3>
        <div className={style.attributeContainerG}>
          <p className={style.attributeText}>{contestant.traits.age}</p>
          <p className={style.attributeText}>{contestant.traits.gender}</p>
        </div>
        <div className={style.attributeContainerG}>
          <p className={style.attributeText}>Status</p>
          <p className={style.attributeText}>{contestant.traits.status}</p>
        </div>
        <div className={style.attributeContainerG}>
          <p className={style.attributeText}>Trait</p>
          <p className={style.attributeText}>{contestant.traits.trait}</p>
        </div>
        <div
          className={style.attributeContainer}
          style={{ color: `var(--contestant-orange)` }}
        >
          <p className={style.attributeText}>Body</p>
          <p className={style.attributeText}>{contestant.attribute.body}</p>
        </div>
        <div
          className={style.attributeContainer}
          style={{ color: `var(--contestant-purple)` }}
        >
          <p className={style.attributeText}>Mind</p>
          <p className={style.attributeText}>{contestant.attribute.mind}</p>
        </div>
        <div
          className={style.attributeContainer}
          style={{ color: `var(--contestant-green)` }}
        >
          <p className={style.attributeText}>Persona</p>
          <p className={style.attributeText}>{contestant.attribute.persona}</p>
        </div>
      </div>
    </>
  )
}
