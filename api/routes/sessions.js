import express from 'express'
import asyncHandler from 'express-async-handler'

// Models
import SessionModel from '../models/session'

export default function createRouter () {
  const router = express.Router()

  router.post('/', asyncHandler(async (req, res) => {
    try {
      const timerInput = req.body
      const createdSession = await SessionModel.create({
        name: timerInput.name,
        time: timerInput.time
      })
      if (createdSession) {
        return res
          .status(200)
          .json(createdSession)
      }
    } catch (error) {
      // EXTRA Error Management here: Eg Slack notifcation for instance.
      return res.status(500).json(error)
    }
  }))

  router.get('/', asyncHandler(async (_, res) => {
    try {
      const sessions = await SessionModel.find(
        {}, {
          createdAt: 1, // We filter so we get only th item we really care about.
          name: 1,
          time: 1,
          _id: 1
        }
      )
      if (sessions) {
        return res
          .status(200)
          .json(sessions)
      }
    } catch (error) {
      // EXTRA Error Management here: Eg Slack notifcation for instance.
      return res.status(500).json(error)
    }
  }))

  router.delete('/:id', asyncHandler(async (req, res) => {
    try {
      const deletedItem = await SessionModel.deleteOne({
        _id: req.params.id
      })
      if (deletedItem) {
        return res
          .status(200)
          .json({
            msg: `${req.params.id} was deleted succesfully`
          })
      }
    } catch (error) {
      // EXTRA Error Management here: Eg Slack notifcation for instance.
      return res.status(500).json(error)
    }
  }))

  return router
}
