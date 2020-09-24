export default function createSessionStore({ db }) {
  return {
    async createTimer(sessionInput) {
      return await db.set(sessionInput)
    },

    async listTimers() {
      return await db.list()
    },
  }
}
