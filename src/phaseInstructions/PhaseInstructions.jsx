import { useContext } from "react"
import style from "../phaseInstructions/phaseInstructions.module.css"
import { PHASES } from "../gameConsts"
import phoneIcon from "../phaseInstructions/assets/phoneIcon.svg"
import { NextButton } from "../global/buttons/NextButton"
import { StateContext } from "../lib/StateContext"

export const PhaseInstructions = () => {
  const { state, setPhase, dealEventCards } = useContext(StateContext)

  return (
    <>
      {state.phase === PHASES.ENTER_GAME && (
        <div className={style.instructionContainer}>
          <img src={phoneIcon} className={style.phoneIcon} />
          <h3 className={style.text}>
            This icon means your phone is needed for this phase
          </h3>
          <NextButton
            onClick={() => setPhase(PHASES.CREW_DIVISION)}
            variant="primary"
          />
        </div>
      )}
      {state.phase === PHASES.CREW_DIVISION && (
        <div className={style.instructionContainer}>
          <img src={phoneIcon} className={style.phoneIcon} />
          <h3 className={style.text}>Find out which crew you are on.</h3>
          <NextButton
            onClick={() => setPhase(PHASES.CONTESTANT_REVEAL)}
            variant="primary"
          />
        </div>
      )}
      {state.phase === PHASES.CONTESTANT_REVEAL && (
        <div className={style.instructionContainer}>
          <img src={phoneIcon} className={style.phoneIcon} />
          <h3 className={style.text}>Identify your contestants.</h3>
          <NextButton
            onClick={() => {
              setPhase(PHASES.EVENT)
              dealEventCards()
            }}
            variant="primary"
          />
        </div>
      )}
      {state.phase === PHASES.EVENT && (
        <div className={style.instructionContainer}>
          <img src={phoneIcon} className={style.phoneIcon} />
          <h3 className={style.text}>View and use event cards.</h3>
          <NextButton
            disabled={state.players.some(
              (p) => p.eventsCards[0].when === "NOW"
            )}
            onClick={() => setPhase(PHASES.LINEUP)}
            variant="primary"
          />
        </div>
      )}
      {state.phase === PHASES.LINEUP && (
        <div className={style.instructionContainer}>
          <h3 className={style.text}>
            Arrange contestants to prepare for the challenge.
          </h3>
          <NextButton
            onClick={() => setPhase(PHASES.CHALLENGE)}
            variant="primary"
          />
        </div>
      )}
      {state.phase === PHASES.CHALLENGE && (
        <div className={style.instructionContainer}>
          <h3 className={style.text}>Click to start the challenge</h3>
          <NextButton
            onClick={() => setPhase(PHASES.STRATEGIZE)}
            variant="primary"
          />
        </div>
      )}
      {state.phase === PHASES.STRATEGIZE && (
        <div className={style.instructionContainer}>
          <h3 className={style.text}>
            Talk with your crew to decide who to vote out.
          </h3>
          <NextButton
            onClick={() => setPhase(PHASES.SUMMIT_TWIST)}
            variant="primary"
          />
        </div>
      )}
      {state.phase === PHASES.SUMMIT_TWIST && (
        <div className={style.instructionContainer}>
          <h3 className={style.text}>A summit twist card has been played.</h3>
          <NextButton
            onClick={() => setPhase(PHASES.SUMMIT_CARDS)}
            variant="primary"
          />
        </div>
      )}
      {state.phase === PHASES.SUMMIT_CARDS && (
        <div className={style.instructionContainer}>
          <img src={phoneIcon} className={style.phoneIcon} />
          <h3 className={style.text}>
            Play any cards that you wish before the votes are cast.
          </h3>
          <NextButton
            onClick={() => setPhase(PHASES.SUMMIT_VOTE)}
            variant="primary"
          />
        </div>
      )}
      {state.phase === PHASES.SUMMIT_VOTE && (
        <div className={style.instructionContainer}>
          <img src={phoneIcon} className={style.phoneIcon} />
          <h3 className={style.text}>
            Pick which contestant you want to vote out.
          </h3>
          <NextButton onClick={() => setPhase("event")} variant="primary" />
        </div>
      )}
    </>
  )
}
