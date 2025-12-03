import style from "../buttons/nextButton.module.css"

import nextButton from "../assets/nextArrow.svg"

export const NextButton = ({ onClick, ...props }) => {
  return (
    <button className={style.nextButton} onClick={onClick} {...props}>
      <img src={nextButton} alt="Next Button" style={{ width: "32px" }} />
    </button>
  )
}
