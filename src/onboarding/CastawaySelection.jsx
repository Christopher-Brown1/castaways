import style from "../onboarding/CastawaySelection.module.css"

import { TribeDeck1 } from "../global-components/TribeDeck1.jsx"
import { TribeDeck2 } from "../global-components/TribeDeck2.jsx"
import { NextButton } from "../global-components/NextButton.jsx"

export const CastawaySelection = ({ setStep, players }) => {
  return (
    <>
      <div className={style.deckContainer}>
        <TribeDeck1 players={players} />
        <TribeDeck2 players={players} />
        <div className={style.instructionContainer}>
          <h2 className={style.instructionText}>
            Check out your castaways on your phone now.
          </h2>
          <NextButton onClick={() => setStep("dailyMail")} />
        </div>
      </div>
    </>
  )
}
