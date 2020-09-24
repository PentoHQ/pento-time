import express from 'express'

export default function createRouter({ sessionStore }) {
  const router = express.Router()

  router.post('/', async (req, res) => {
    const timerInput = req.body
    const timer = await sessionStore.createTimer(timerInput)
    return res.send({ timer })
  })

  router.get('/', async (req, res) => {
    const timers = await sessionStore.listTimers()
    return res.send(timers)
  })

  return router
}
