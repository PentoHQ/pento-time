import db from '../models'

export default {
  set: async (value) => {
    const session = await db.Session.create(value)
    return session.dataValues
  },
  list: async () => {
    const sessions = await db.Session.findAll()
    return sessions.map((session) => session.dataValues)
  }
}
