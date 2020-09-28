import express from 'express'

export default function createRouter({ sessionStore }) {
  const router = express.Router()

  router.post('/', (req, res) => {
    const sessionObj = req.body
    const newSession = sessionStore.create(sessionObj)
    return res.send(newSession)
  })

  router.get('/', (req, res) => {
    const sessions = sessionStore.list()
    return res.send(sessions)
  })

  return router
}
