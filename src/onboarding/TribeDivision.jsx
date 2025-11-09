import style from "../onboarding/tribeDivision.module.css"

import { PlayerCard } from "./PlayerCard.jsx"
import { NextButton } from "../global/components/buttons/NextButton.jsx"

export const TribeDivision = ({ setStep, players }) => {
  return (
    <>
      <div className={style.tribeDivisionContent}>
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
