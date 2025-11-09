import style from "../onboarding/CastawaySelection.module.css"

import { TribeDeck1 } from "../gameplay/components/tribeDeck/TribeDeck1.jsx"
import { TribeDeck2 } from "../gameplay/components/tribeDeck/TribeDeck2.jsx"
import { NextButton } from "../global/components/buttons/NextButton.jsx"

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
          <NextButton onClick={() => setStep("gameplay")} />
        </div>
      </div>
    </>
  )
}
