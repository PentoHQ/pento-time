import e from "express";

const db = {}
export default function createDB(table) {
  return {
    set: (key, value) => {
      db[`${table}-${key}`] = value
    },
    get: (key) => ({ id: key, ...db[`${table}-${key}`] }),
    list: () =>
      Object.keys(db)
        .filter((x) => x.startsWith(table))
        .map((x) => ({ id: x.replace(`${table}-`,''), ...db[x] })), //make sure ID formats are constant throughout
    delete: (key) => {
      
      /**
       * ``` delete db[`${table}-${key}`] ``` works right away
       * but before deletion, a verification of existence is nice
       */

      let _id = Object.keys(db)
                  .filter((x) => x === `${table}-${key}`)
      return _id.length === 1? delete db[_id] : false
      
    }
      
      
  }
}
