import express from "express"
import { port } from "./config/enviroment-variables"
import { connectToDatabase } from "./database/data-source"

import userRoutes from "./routes/user-routes"
import quizRoutes from "./routes/quiz-routes"

connectToDatabase()
  .then(() => {

    const server = express()
    server.use(express.json())

    server.use("/user", userRoutes)
    server.use("/quiz", quizRoutes)
    
    server.listen(port, () => console.log(`Server running on port ${port}`))

  })
  .catch((error) => console.log(error.message))