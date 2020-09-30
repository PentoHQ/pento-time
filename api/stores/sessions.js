import { v4 } from 'uuid'

export default function createSessionStore({ db }) {
  return {
    async createTimer(sessionInput) {
      const id = v4()
      if (sessionInput.id) {
        id = sessionInput.id
      }
      await db.set(id, sessionInput)
      return await db.get(id)
    },

    async listTimers() {
      return db.list()
    },
  }
}
