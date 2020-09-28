const db = {}
export default function createDB(table) {
  return {
    set: (id, obj) => db[`${table}-${id}`] = obj,
    get: (id) => ({ id: id, ...db[`${table}-${id}`] }),
    list: () =>
      Object.keys(db)
        .filter((x) => x.startsWith(table))
        .map((x) => ({ id: x.replace(`${table}-`,''), ...db[x] })),
  }
}
