import { useState } from "react"

import { TribeDeck1 } from "../gameplay/components/tribeDeck/TribeDeck1"
import { TribeDeck2 } from "../gameplay/components/tribeDeck/TribeDeck2"
import { PhaseInstructions } from "./components/phaseInstructions/PhaseInstructions"
import style from "./gameplay.module.css"

export const Gameplay = ({ players }) => {
  const [phase, setPhase] = useState("dailyMail")
  const handlePhaseChange = (phase) => {
    setPhase(phase)
  }
  return (
    <>
      <div className={style.deckContainer}>
        <TribeDeck1 players={players} />
        <TribeDeck2 players={players} />
      </div>

      {phase === "dailyMail" && (
        <PhaseInstructions
          onSetPhase={() => handlePhaseChange("arrangeTribes")}
        >
          Check out your castaways on your phone now.
        </PhaseInstructions>
      )}
      {phase === "arrangeTribes" && (
        <PhaseInstructions onSetPhase={() => handlePhaseChange("challenge")}>
          Arrange castaways to prepare for the challenge.
        </PhaseInstructions>
      )}
      {phase === "challenge" && (
        <PhaseInstructions onSetPhase={() => handlePhaseChange("strategize")}>
          Draw a card for the challenge.
        </PhaseInstructions>
      )}
      {phase === "strategize" && (
        <PhaseInstructions onSetPhase={() => handlePhaseChange("tribunal")}>
          It's time to decide who to vote out tonight.
        </PhaseInstructions>
      )}
      {phase === "tribunal" && (
        <PhaseInstructions onSetPhase={() => handlePhaseChange("dailyMail")}>
          It's time for any twist incite cards
        </PhaseInstructions>
      )}
    </>
  )
}
