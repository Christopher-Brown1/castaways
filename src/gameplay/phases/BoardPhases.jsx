import { CrewDeck } from "../crewDeck/CrewDeck"
import style from "../gameplay.module.css"

export const BoardPhases = () => {
  return (
    <div className={style.deckContainer}>
      {/* TODO add boolean toggle for merge */}
      <CrewDeck color="purple" />
      <CrewDeck color="yellow" />
    </div>
  )
}
