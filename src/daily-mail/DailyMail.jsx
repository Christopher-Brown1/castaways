import { TribeDeck1 } from "../global-components/TribeDeck1"
import { TribeDeck2 } from "../global-components/TribeDeck2"
// import { NextButton } from "../global-components/NextButton"
import { Button } from "../global-components/Button"
import style from "../daily-mail/dailyMail.module.css"

export const DailyMail = ({ setStep, players }) => {
  return (
    <>
      <div className={style.dailyMailContainer}>
        <TribeDeck1 players={players} />
        <TribeDeck2 players={players} />
        <div className={style.instructionContainer}>
          <h2 className={style.instructionText}>
            Turn Leader: Draw a Daily Mail card.
          </h2>
          <Button
            onClick={() => setStep("castawaySelection")}
            variant='primary'
          >
            Deal
          </Button>
        </div>
      </div>
    </>
  )
}
