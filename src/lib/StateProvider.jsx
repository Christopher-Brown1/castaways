import { useReducer } from "react"
import { initialState, reducer, ACTIONS } from "./consts"
import { StateContext } from "./StateContext"
import { updateFirebaseState } from "../firebase"

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Create functions
  const setStartState = (startState) => {
    updateFirebaseState(startState)
    dispatch({ type: ACTIONS.APP_LOADED, payload: startState })
  }
  const setPhase = (phase) => {
    updateFirebaseState({ ...state, phase })
    dispatch({ type: ACTIONS.SET_PHASE, payload: phase })
  }
  const setPlayers = (players) => {
    updateFirebaseState({ ...state, players })
    dispatch({ type: ACTIONS.SET_PLAYERS, payload: players })
  }
  const dealEventCards = () => {
    const eventCardsCopy = [...state.eventCards]
    const newPlayers = state.players.map((p) => {
      p.eventCards.unshift(eventCardsCopy.shift())
      return p
    })

    updateFirebaseState({
      ...state,
      players: newPlayers,
      eventCards: eventCardsCopy,
    })
    dispatch({
      type: ACTIONS.SET_PLAYERS,
      payload: {
        players: newPlayers,
      },
    })
  }
  const setIsClient = () => dispatch({ type: ACTIONS.SET_IS_CLIENT })
  const setIsMaster = () => dispatch({ type: ACTIONS.SET_IS_MASTER })

  return (
    <StateContext.Provider
      value={{
        state,
        setStartState,
        setPhase,
        setPlayers,
        dealEventCards,
        setIsClient,
        setIsMaster,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}
