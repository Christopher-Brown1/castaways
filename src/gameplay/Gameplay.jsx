import { useState } from "react"

import { TribeDeck1 } from "../global/components/TribeDeck1"
import { TribeDeck2 } from "../global/components/TribeDeck2"
import { Button } from "../global/components/Button"
import style from "./gameplay.module.css"
import { DAILYMAIL } from "../gameConsts"

export const Gameplay = ({ players }) => {
  // const [phase, setPhase] = useState("dailyMail")
  const [card, setCard] = useState(null)

  return (
    <>
      <div className={style.dailyMailContainer}>
        <TribeDeck1 players={players} />
        <TribeDeck2 players={players} />
      </div>
      <div className={style.instructionContainer}>
        <h2 className={style.instructionText}>
          Turn Leader: Draw a Daily Mail card.
        </h2>
        <Button
          onClick={() => {
            // draw card
            setCard(DAILYMAIL[0])
          }}
          variant='primary'
        >
          Deal
        </Button>
      </div>

      {/* modal for card */}
    </>
  )
}
