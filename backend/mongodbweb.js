import { createServer } from 'node:http'
import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017'
const dbName = 'ch2'
const client = new MongoClient(url)

try {
  await client.connect()
  console.log('Connected to MongoDB')
} catch (err) {
  console.error('Failed to connect to MongoDB', err)
  process.exit(1)
}

const server = createServer(async (req, res) => {
  try {
    const db = client.db(dbName)
    const users = db.collection('users')

    // Example: Fetch all users
    const usersList = await users.find().toArray()

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(usersList))
  } catch (err) {
    console.error('Error handling request', err)
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end('Internal Server Error')
  }
})

const host = 'localhost'
const port = 3000
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
