import { DELETE_TIMER_SESSIONS, SET_TIMER_SESSIONS } from '../constants/timer/reducerTypes'

const initState = []

export default function (state = initState, action) {
  switch (action.type) {
    case SET_TIMER_SESSIONS:
      return action.data
    case DELETE_TIMER_SESSIONS:
      let _state = [...state]
      _state.splice(action.index, 1)
      return _state
    default:
      return state
  }
}
