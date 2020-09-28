import { v4 } from 'uuid'

export default function createSessionStore({ db }) {
  return {
    create(sessionObj) {
      const id = v4()
      if (sessionObj.id) {
        id = sessionObj.id
      }
      db.set(id, sessionObj)
      return db.get(id)
    },

    list() {
      return db.list()
    },

    delete(id) {
      db.delete(id)
    },
  }
}
