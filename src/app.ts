import express from 'express'
import router from './routes'
import dotenv from 'dotenv'
import 'reflect-metadata'
import './database/connection'

dotenv.config()
const app = express()

app.use(express.json())
app.use(router)

export { app }
