import express from "express"
import { port } from "./config/enviroment-variables"
import { connectToDatabase } from "./database/data-source"

import userRoutes from "./routes/user-routes"

connectToDatabase()
  .then(() => {

    const server = express()
    server.use(express.json())

    server.use("/users", userRoutes)
    
    server.listen(port, () => console.log(`Server running on port ${port}`))

  })
  .catch((error) => console.log(error.message))