// App dependencies
import express from 'express'

// Configuration
import createServer from './configurations/server.config'
import connectDB from './configurations/db.config'

const app = express()

// Configuration launch.
createServer(app)
connectDB()

const port = process.env.PORT || 3001

app.listen(port, () => console.log(`Express server is running on localhost:${port}`))
