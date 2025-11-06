import style from "../onboarding/tribeDivision.module.css"

import { Header } from "../global-components/Header.jsx"
import { PlayerCard } from "../global-components/PlayerCard.jsx"
import { NextButton } from "../global-components/NextButton"

export const TribeDivision = ({ setStep, players }) => {
  return (
    <>
      <div className={style.tribeDivisionContent}>
        <Header />
        <div className={style.playersContainer}>
          <h2 className={style.playersText}>Players</h2>
          <div className={style.playerTileContainer}>
            {players.map((player, index) => (
              <PlayerCard key={index} player={player} />
            ))}
          </div>
        </div>
        <div className={style.instructionContainer}>
          <h2 className={style.tribeText}>
            Open your buffs to find out which tribe you are on
          </h2>
          <NextButton onClick={() => setStep("castawaySelection")} />
        </div>
      </div>
    </>
  )
}
