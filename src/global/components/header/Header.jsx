import style from "./header.module.css"
import { GameplayInfo } from "./GameplayInfo"

import logo from "../../assets/Logo.png"

export const Header = ({ step }) => {
  const colors = {
    roomCode: "var(--system-white)",
    castaways: "var(--system-orange)",
    currentPhase: "var(--system-blue)",
    turnLeader: "var(--system-green)",
  }

  return (
    <>
      <header className={style.headerContainer}>
        <GameplayInfo
          color={colors.roomCode}
          title='Room Code'
          content='ABC123'
        />
        <img src={logo} alt='App Logo' style={{ width: "360px" }} />
        <div className={style.statusContainer}>
          {step === "castawaySelection" && (
            <GameplayInfo
              color={colors.castaways}
              title='Castaways'
              content='16'
            />
          )}
          {step === "gameplay" && (
            <>
              <GameplayInfo
                color={colors.currentPhase}
                title='Current Phase'
                content={"Daily Mail"}
              />

              <GameplayInfo
                color={colors.turnLeader}
                title='Turn Leader'
                content='Chris'
              />

              <GameplayInfo
                color={colors.castaways}
                title='Castaways'
                content='16'
              />
            </>
          )}
        </div>
      </header>
    </>
  )
}
