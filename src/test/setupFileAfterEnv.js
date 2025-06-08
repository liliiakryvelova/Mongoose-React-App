import mongoose from 'mongoose'

import { beforeAll, afterAll } from '@jest/globals'
import { initDatabase } from '../db/init.js'
import dotenv from 'dotenv'

beforeAll(async () => {
  dotenv.config()
  await initDatabase()
})

afterAll(async () => {
  await mongoose.disconnect()
  console.info('Disconnected from the database.')
})
