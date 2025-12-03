import { useContext, useEffect } from "react"
import { CrewDeck } from "../crewDeck/CrewDeck"
import style from "../gameplay.module.css"
import { StateContext } from "../../lib/StateContext"
import { CONTESTANTS } from "../../gameConsts"

export const ContestantReveal = () => {
  const { state, setPlayers } = useContext(StateContext)

  useEffect(() => {
    const purplePlayers = state.players.filter((p) => p.crew === "purple")
    const yellowPlayers = state.players.filter((p) => p.crew === "yellow")
    const { purpleContestants, yellowContestants } = splitContestants()
    const { assignedPurplePlayers, assignedYellowPlayers } = assignContestants(
      purplePlayers,
      yellowPlayers,
      purpleContestants,
      yellowContestants
    )

    const sortFn = (a, b) => {
      if (a.attribute.type === "body") return -1
      if (b.attribute.type === "body") return 1
      if (a.attribute.type === "persona") return -1
      if (b.attribute.type === "persona") return 1
      if (a.attribute.type === "mind") return -1
      if (b.attribute.type === "mind") return 1
      return 0
    }

    setPlayers({
      players: [...assignedPurplePlayers, ...assignedYellowPlayers],
      contestants: [
        ...purpleContestants.sort(sortFn),
        ...yellowContestants.sort(sortFn),
      ],
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={style.deckContainer}>
      <CrewDeck color="purple" />
      <CrewDeck color="yellow" />
    </div>
  )
}

const splitContestants = () => {
  const bodyContestants = Object.values(CONTESTANTS).filter(
    (contestant) => contestant.attribute.type === "body"
  )
  const mindContestants = Object.values(CONTESTANTS).filter(
    (contestant) => contestant.attribute.type === "mind"
  )
  const personaContestants = Object.values(CONTESTANTS).filter(
    (contestant) => contestant.attribute.type === "persona"
  )
  const purpleContestants = []
  const yellowContestants = []

  // Randomly assign 3 body types, 2 persona types, and 3 mind types to purpleContestants and yellowContestants
  for (let i = 0; i < 3; i++) {
    const randomBody1Contestant =
      bodyContestants[Math.floor(Math.random() * bodyContestants.length)]
    const randomBody2Contestant =
      bodyContestants[Math.floor(Math.random() * bodyContestants.length)]
    purpleContestants.push(randomBody1Contestant)
    yellowContestants.push(randomBody2Contestant)
    bodyContestants.splice(bodyContestants.indexOf(randomBody1Contestant), 1)
    bodyContestants.splice(bodyContestants.indexOf(randomBody2Contestant), 1)
  }
  for (let i = 0; i < 2; i++) {
    const randomPersona1Contestant =
      personaContestants[Math.floor(Math.random() * personaContestants.length)]
    const randomPersona2Contestant =
      personaContestants[Math.floor(Math.random() * personaContestants.length)]
    purpleContestants.push(randomPersona1Contestant)
    yellowContestants.push(randomPersona2Contestant)
    personaContestants.splice(
      personaContestants.indexOf(randomPersona1Contestant),
      1
    )
    personaContestants.splice(
      personaContestants.indexOf(randomPersona2Contestant),
      1
    )
  }
  for (let i = 0; i < 3; i++) {
    const randomMind1Contestant =
      mindContestants[Math.floor(Math.random() * mindContestants.length)]
    const randomMind2Contestant =
      mindContestants[Math.floor(Math.random() * mindContestants.length)]
    purpleContestants.push(randomMind1Contestant)
    yellowContestants.push(randomMind2Contestant)
    mindContestants.splice(mindContestants.indexOf(randomMind1Contestant), 1)
    mindContestants.splice(mindContestants.indexOf(randomMind2Contestant), 1)
  }
  return { purpleContestants, yellowContestants }
}
const assignContestants = (
  purplePlayers,
  yellowPlayers,
  purpleContestants,
  yellowContestants
) => {
  const purpleContestantsCopy = [...purpleContestants]
  const yellowContestantsCopy = [...yellowContestants]
  const assignedPurplePlayers = purplePlayers.map((player) => {
    const randomContestant =
      purpleContestantsCopy[
        Math.floor(Math.random() * purpleContestantsCopy.length)
      ]
    purpleContestantsCopy.splice(
      purpleContestantsCopy.indexOf(randomContestant),
      1
    )

    const randomContestant2 =
      purpleContestantsCopy[
        Math.floor(Math.random() * purpleContestantsCopy.length)
      ]
    purpleContestantsCopy.splice(
      purpleContestantsCopy.indexOf(randomContestant2),
      1
    )

    return { ...player, contestants: [randomContestant, randomContestant2] }
  })
  let assignedYellowPlayers = yellowPlayers.map((player) => {
    const randomContestant =
      yellowContestantsCopy[
        Math.floor(Math.random() * yellowContestantsCopy.length)
      ]
    yellowContestantsCopy.splice(
      yellowContestantsCopy.indexOf(randomContestant),
      1
    )

    const randomContestant2 =
      yellowContestantsCopy[
        Math.floor(Math.random() * yellowContestantsCopy.length)
      ]
    yellowContestantsCopy.splice(
      yellowContestantsCopy.indexOf(randomContestant2),
      1
    )

    return { ...player, contestants: [randomContestant, randomContestant2] }
  })

  return { assignedPurplePlayers, assignedYellowPlayers }
}
