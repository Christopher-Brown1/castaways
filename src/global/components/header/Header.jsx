import style from "./header.module.css"
import { GameplayInfo } from "./GameplayInfo"

import logo from "../../assets/Logo.png"

export const Header = ({ step }) => {
  return (
    <>
      <header className={style.headerContainer}>
       <GameplayInfo />
        <img src={logo} alt='App Logo' style={{ width: "360px" }} />
        <div className={style.statusContainer}>
          {step === "castawaySelection" && (
            <div
              className={style.castawayCounterContainer}
              style={{
                border: "1px solid var(--system-orange)",
              }}
            >
              <p
                className={style.castawayCounterText}
                style={{ color: "var(--system-orange)" }}
              >
                Castaways
              </p>
              <p
                className={style.castawayCounterText}
                style={{
                  color: "var(--system-orange)",
                  borderTop: "1px solid var(--system-orange)",
                  width: "100%",
                }}
              >
                18
              </p>
            </div>
          )}
          {step === "gameplay" && (
            <>
              <div
                className={style.castawayCounterContainer}
                style={{
                  border: "1px solid var(--system-blue)",
                }}
              >
                <p
                  className={style.castawayCounterText}
                  style={{ color: "var(--system-blue)" }}
                >
                  Current Phase
                </p>
                <p
                  className={style.castawayCounterText}
                  style={{
                    borderTop: "1px solid var(--system-blue)",
                    color: "var(--system-blue)",
                    width: "100%",
                  }}
                >
                  Daily Mail
                </p>
              </div>

              <div
                className={style.castawayCounterContainer}
                style={{
                  border: "1px solid var(--system-green)",
                }}
              >
                <p
                  className={style.castawayCounterText}
                  style={{ color: "var(--system-green)" }}
                >
                  Turn Leader
                </p>
                <p
                  className={style.castawayCounterText}
                  style={{
                    borderTop: "1px solid var(--system-green)",
                    color: "var(--system-green)",
                    width: "100%",
                  }}
                >
                  Chris
                </p>
              </div>

              <div
                className={style.castawayCounterContainer}
                style={{
                  border: "1px solid var(--system-orange)",
                }}
              >
                <p
                  className={style.castawayCounterText}
                  style={{ color: "var(--system-orange)" }}
                >
                  Castaways
                </p>
                <p
                  className={style.castawayCounterText}
                  style={{
                    borderTop: "1px solid var(--system-orange)",
                    color: "var(--system-orange)",
                    width: "100%",
                  }}
                >
                  18
                </p>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  )
}
