
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
 
const getDb = function(table) {
    return open({
        filename: './database.db',
        driver: sqlite3.Database
    }).then( async (db) => {
        await db.exec(`CREATE TABLE IF NOT EXISTS ${table} (key TEXT, value TEXT)  `)
        return db
    })
}

// you would have to import / invoke this in another file
export default function createDB (table) {
    return  {
        set: (key, value) => {
            return getDb(table).then( async (db) => {
                await db.run(`INSERT INTO ${table} (key, value) VALUES (?,?)`, key, JSON.stringify(value))
            })            
        },
        get: (key) => {
            return getDb(table).then( async (db) => {
                let jsonValue = await db.get(`SELECT value FROM ${table} WHERE key = :key`, { ':key': key })
                if (jsonValue) {
                    return JSON.parse(jsonValue.value)
                }
            })
        },
        list: () => {
            return getDb(table).then( async (db) => {
                let listOfJsonStrings = await db.all(`SELECT key, value FROM ${table}`)
                return listOfJsonStrings.map((x) => (Object.assign(JSON.parse(x.value),{ id: x.key })))
            })
        }        
    }
}