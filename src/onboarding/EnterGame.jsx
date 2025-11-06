import style from "../onboarding/EnterGame.module.css"

import { PlayerCard } from "../global-components/PlayerCard.jsx"
import { NextButton } from "../global-components/NextButton"
import { Header } from "../global-components/Header.jsx"

export const EnterGame = ({ setStep, players }) => {
  return (
    <>
      <div className={style.enterGameContent}>
        <Header />
        <div className={style.bodyContent}>
          <div className={style.playersContainer}>
            <h2 className={style.playersText}>Players</h2>
            <div className={style.playerTileContainer}>
              {players.map((player, index) => (
                <PlayerCard key={index} player={player} />
              ))}
            </div>
          </div>
          <div className={style.enterGameTextContainer}>
            <p className={style.enterGameText}>How to enter:</p>
            <ul style={{ margin: 0, gap: "16px" }}>
              <li className={style.enterGameText}>
                Visit website.com on your phone.
              </li>
              <li className={style.enterGameText}>
                Enter your name and the room code.
              </li>
              <li className={style.enterGameText}>
                Follow setup directions on your mobile phone.
              </li>
            </ul>
          </div>
        </div>
        <NextButton onClick={() => setStep("tribeDivision")} />
      </div>
    </>
  )
}
