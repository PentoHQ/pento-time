import bodyParser from 'body-parser'
import cors from 'cors'
import pinoLogger from 'express-pino-logger'
import createRouter from '../routes'
const apiRouter = createRouter()

export default function createServer (app) {
  app.use(cors())
  app.use(pinoLogger())
  app.use(bodyParser.json())
  app.use('/api', apiRouter)
}
