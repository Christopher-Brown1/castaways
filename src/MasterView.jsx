import { Header } from "./header/Header"
import { Gameplay } from "./gameplay/Gameplay"
import { PhaseInstructions } from "./phaseInstructions/PhaseInstructions"

export const MasterView = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "48px",
      }}
    >
      <Header />
      <Gameplay />
      <PhaseInstructions />
    </div>
  )
}
