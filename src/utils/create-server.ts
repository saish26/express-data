import { config } from 'dotenv'
import cors from 'cors'
import express, { Request, Response } from 'express'
import router from '../routes/index'
import * as ErrorMiddleware from '../middlewares/errors.middleware'

config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
console.log('hehahah')
app.use('/api', router)

app.use(ErrorMiddleware.methodNotAllowed)
app.use(ErrorMiddleware.genericErrorHandler)
export default app
