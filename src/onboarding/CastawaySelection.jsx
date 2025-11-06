import style from "../onboarding/CastawaySelection.module.css"

import { Header } from "../global-components/Header.jsx"
import { PlayerNameCard } from "../global-components/PlayerNameCard.jsx"
import { NextButton } from "../global-components/NextButton.jsx"
import { CastawayCard } from "../global-components/CastawayCard.jsx"

export const CastawaySelection = ({ setStep, players }) => {
  return (
    <>
      <div className={style.deckContainer}>
        <Header />
        <div className={style.tribeDeck}>
          <div className={style.deckHeader}>
            <h2 className={style.headerText}>Purple Tribe</h2>
            <div className={style.playersContainer}>
              {players
                .filter((player) => player.tribe === "purple")
                .map((player, index) => (
                  <PlayerNameCard key={index} player={player} />
                ))}
            </div>
          </div>
          <div className={style.castawaysContainer}>
            {players
              .filter((player) => player.tribe === "purple")
              .reduce((acc, player) => {
                const newAcc = [...acc]
                player.castaways.forEach((castaway) => {
                  const idx = Math.floor(Math.random() * (newAcc.length + 1))
                  newAcc.splice(idx, 0, castaway)
                })
                return newAcc
              }, [])
              .map((castaway) => (
                <CastawayCard castaway={castaway} />
              ))}
          </div>
        </div>
        <div className={style.tribeDeck2}>
          <div className={style.castawaysContainer}>
            {players
              .filter((player) => player.tribe === "yellow")
              .reduce((acc, player) => {
                const newAcc = [...acc]
                player.castaways.forEach((castaway) => {
                  const idx = Math.floor(Math.random() * (newAcc.length + 1))
                  newAcc.splice(idx, 0, castaway)
                })
                return newAcc
              }, [])
              .map((castaway) => (
                <CastawayCard castaway={castaway} />
              ))}
          </div>
          <div className={style.deckHeader}>
            <div className={style.playersContainer}>
              {players
                .filter((player) => player.tribe === "yellow")
                .map((player, index) => (
                  <PlayerNameCard key={index} player={player} />
                ))}
            </div>
            <h2 className={style.headerText}>Yellow Tribe</h2>
          </div>
        </div>
        <div className={style.instructionContainer}>
          <h2 className={style.instructionText}>
            Check out your castaways on your phone now.
          </h2>
          <NextButton onClick={() => setStep("main")} />
        </div>
      </div>
    </>
  )
}
