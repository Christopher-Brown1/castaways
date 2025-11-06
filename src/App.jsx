import { useState } from "react"
import "./App.css"
import { CASTAWAYS } from "./gameConsts.js"
import { Onboarding } from "./onboarding/Onboarding.jsx"
import { EnterGame } from "./onboarding/EnterGame.jsx"
import { TribeDivision } from "./onboarding/TribeDivision.jsx"
import { CastawaySelection } from "./onboarding/CastawaySelection.jsx"
import { Gameplay } from "./gameplay/Gameplay.jsx"
import { Header } from "./global/components/header/Header.jsx"

function App() {
  const [step, setStep] = useState("enterGame")
  const [players, _setPlayers] = useState([
    {
      name: "Player 1",
      icon: "coconut",
      color: "var(--player-pink)",
      tribe: "purple",
      castaways: [CASTAWAYS["DOCTOR"], CASTAWAYS["TRIATHLETE"]],
    },
    {
      name: "Player 2",
      icon: "fish",
      color: "var(--player-green)",
      tribe: "purple",
      castaways: [CASTAWAYS["PHOTOGRAPHER"], CASTAWAYS["HAIRDRESSER"]],
    },
    {
      name: "Player 3",
      icon: "crab",
      color: "var(--player-yellow)",
      tribe: "purple",
      castaways: [CASTAWAYS["FIREMAN"], CASTAWAYS["FARMER"]],
    },
    {
      name: "Player 4",
      icon: "fire",
      color: "var(--player-brown)",
      tribe: "purple",
      castaways: [CASTAWAYS["RETIRED_MARINE"], CASTAWAYS["ACCOUNTANT"]],
    },
    {
      name: "Player 5",
      icon: "island",
      color: "var(--player-red)",
      tribe: "yellow",
      castaways: [CASTAWAYS["VIDEO_GAMER"], CASTAWAYS["CONTRACTOR"]],
    },
    {
      name: "Player 6",
      icon: "machete",
      color: "var(--player-blue)",
      tribe: "yellow",
      castaways: [CASTAWAYS["STUDENT"], CASTAWAYS["POKER_PRO"]],
    },
    {
      name: "Player 7",
      icon: "snake",
      color: "var(--player-purple)",
      tribe: "yellow",
      castaways: [CASTAWAYS["ENTREPRENEUR"], CASTAWAYS["YOGA_INSTRUCTOR"]],
    },
    {
      name: "Player 8",
      icon: "torch",
      color: "var(--player-orange)",
      tribe: "yellow",
      castaways: [CASTAWAYS["PSYCHIATRIST"], CASTAWAYS["INFLUENCER"]],
    },
  ])

  return (
    <>
      <Header step={step} />
      {step === "onboarding" && <Onboarding setStep={setStep} />}
      {step === "enterGame" && (
        <EnterGame setStep={setStep} players={players} />
      )}
      {step === "tribeDivision" && (
        <TribeDivision setStep={setStep} players={players} />
      )}
      {step === "castawaySelection" && (
        <CastawaySelection setStep={setStep} players={players} />
      )}
      {step === "gameplay" && <Gameplay players={players} />}
    </>
  )
}

export default App
