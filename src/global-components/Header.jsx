import style from "../global-components/header.module.css"

import logo from "../assets/logo.png"

export const Header = ({}) => {
  return (
    <>
      <header className={style.headerContainer}>
        <div className={style.roomCodeContainer}>
          <p className={style.roomCodeText}>Room Code</p>
          <p
            className={style.roomCodeText}
            style={{
              borderTop: "1px solid var(--system-white)",
              width: "100%",
            }}
          >
            ABC123
          </p>
        </div>
        <img src={logo} alt='App Logo' style={{ width: "360px" }} />
        <div className={style.castawayCounterContainer}>
          <p className={style.castawayCounterText}>Castaways</p>
          <p
            className={style.castawayCounterText}
            style={{
              borderTop: "1px solid var(--system-orange)",
              width: "100%",
            }}
          >
            18
          </p>
        </div>
      </header>
    </>
  )
}
