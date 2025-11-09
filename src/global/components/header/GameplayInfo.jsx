import style from "../header/gameplayInfo.module.css"

export const GameplayInfo = ({ color, title, content }) => {
  return (
    <>
      <div className={style.infoContainer} style={{ color }}>
        <p className={style.infoText}>{title}</p>
        <p
          className={style.infoText}
          style={{
            borderTop: `2px solid ${color || "var(--system-white)"}`,
            width: "100%",
          }}
        >
          {content}
        </p>
      </div>
    </>
  )
}
