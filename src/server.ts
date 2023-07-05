import express from "express"
import { port } from "./config/enviroment-variables"

import userRoutes from "./routes/userRoutes"

const server = express()
server.use(express.json())

server.use(userRoutes)

server.listen(port, () => console.log(`Server running on port ${port}`))