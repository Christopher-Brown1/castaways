import style from "../phaseInstructions/phaseInstructions.module.css"

import { NextButton } from "../../../global/components/buttons/NextButton"

export const PhaseInstructions = ({ onSetPhase, children }) => {
  // const [card, setCard] = useState(null)

  return (
    <>
      <div className={style.instructionContainer}>
        <h3 className={style.text}>{children}</h3>
        <NextButton
          onClick={onSetPhase}
          // draw card
          // setCard(DAILYMAIL[0])
          variant='primary'
        />
      </div>
    </>
  )
}
