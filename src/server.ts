import express from "express"
import { config } from "dotenv"
config()

import userRoutes from "./routes/userRoutes"

const server = express()
const port = process.env.PORT || 3000

server.use(express.json())

server.use(userRoutes)

server.listen(port, () => console.log(`Server running on port ${port}`))