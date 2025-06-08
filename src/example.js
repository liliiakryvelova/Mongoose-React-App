// file: src/example.js
import dotenv from 'dotenv'
dotenv.config()

import { initDatabase } from './db/init.js'

await initDatabase()
