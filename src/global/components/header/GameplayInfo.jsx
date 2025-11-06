import style from "../header/gameplayInfo.module.css"

export const GameplayInfo = () => {
  return (
    <>
      <div className={style.infoContainer}>
        <p className={style.infoText}>Title</p>
        <p
          className={style.infoText}
          style={{
            borderTop: "1px solid var(--system-white)",
            width: "100%",
          }}
        >
          Text
        </p>
      </div>
    </>
  )
}
