import express from 'express'
import { configDotenv } from 'dotenv'
import { handler as ssrHandler } from './dist/server/entry.mjs'
import { endpoints } from './src/config/endpoints.js'

configDotenv()
const port = process.env.PORT

const app = express()
app.use(express.static('dist/client/'))
app.use(ssrHandler)

// Define your API routes here
app.get(endpoints.hello, (req, res) => {
	res.json({ message: 'Hello from Node!' })
})

app.listen(port)

console.log(`Running at ${port}`)