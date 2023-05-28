import { config } from 'dotenv'
import cors from 'cors'
import express, { Request, Response } from 'express'
import router from '../routes/index'
config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
console.log('hehahah')
app.use('/api', router)

export default app
