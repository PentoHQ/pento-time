import axios from '../utils/axios'
import { TIMER_SESSIONS_URL } from '../constants/timer/endpoints'
import { DELETE_TIMER_SESSIONS,SET_TIMER_SESSIONS } from '../constants/timer/reducerTypes'

export function postNewTimerSession(data, callback) {
  return function (dispatch) {
    return axios
      .post(TIMER_SESSIONS_URL, data)
      .then((response) => {
        callback()
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function deleteTimerSession(key, index,callback){
  return function (dispatch) {
    return axios
      .delete(TIMER_SESSIONS_URL+'/'+key)
      .then((response) => {
        dispatch({ type: DELETE_TIMER_SESSIONS, index:index})
        callback(true)
      })
      .catch((err) => {
        console.error(err)
        callback(false)
      })
  }
}

export function getTimerSessions() {
  return function (dispatch) {
    return axios
      .get(TIMER_SESSIONS_URL)
      .then((response) => {
        dispatch({ type: SET_TIMER_SESSIONS, data: response.data })
      })
      .catch((err) => {
        console.error(err)
      })
  }
}
