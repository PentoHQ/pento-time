import express from 'express'

export default function createRouter({ sessionStore }) {
  const router = express.Router()

  router.post('/', (req, res) => {
    const timerInput = req.body
    const timer = sessionStore.createTimer(timerInput)
    return res.send({ timer })
  })

  router.get('/', (req, res) => {
    const timers = sessionStore.listTimers()
    return res.send(timers)
  })

  router.delete('/:sessionID', (req,res) => {
    let success = sessionStore.deleteTimer(req.params.sessionID)
    let status = success? 200 : 404
    return res.sendStatus(status) //We dont need to send back timers list, do we?
  })

  return router
}
