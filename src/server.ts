import express from "express"
import { port } from "./config/enviroment-variables"

import userRoutes from "./routes/user-routes"

const server = express()
server.use(express.json())

server.use('/users', userRoutes)

server.listen(port, () => console.log(`Server running on port ${port}`))