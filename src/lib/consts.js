import { CHALLENGECARDS, EVENTCARDS, MOCK_PLAYERS } from "../gameConsts"
import { randomiseArray } from "./utils"

export const initialState = {
  loading: true,
  isClient: false,
  isMaster: false,
  roomCode: null,
  phase: null,
  players: MOCK_PLAYERS,
  contestants: [],
  eventCards: randomiseArray([...EVENTCARDS]),
  challengeCards: randomiseArray([...CHALLENGECARDS]),
  // twistCards: randomiseArray([...TWISTCARDS]),
}

export const ACTIONS = {
  APP_LOADED: "APP_LOADED",
  SET_PHASE: "SET_PHASE",
  SET_PLAYERS: "SET_PLAYERS",
  SET_IS_CLIENT: "SET_IS_CLIENT",
  SET_IS_MASTER: "SET_IS_MASTER",
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.APP_LOADED:
      return { ...state, ...action.payload, loading: false }
    case ACTIONS.SET_PHASE:
      return { ...state, phase: action.payload }
    case ACTIONS.SET_PLAYERS:
      return {
        ...state,
        players: action.payload.players,
        contestants: action.payload.contestants || state.contestants,
      }
    case ACTIONS.SET_IS_CLIENT:
      return {
        ...state,
        isClient: true,
        isMaster: false,
        phase: PHASES.ENTER_GAME,
      }
    case ACTIONS.SET_IS_MASTER:
      return {
        ...state,
        isMaster: true,
        isClient: false,
        phase: PHASES.ENTER_GAME,
      }
    default:
      return state
  }
}
