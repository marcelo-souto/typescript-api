import { Router } from "express"
import { ExpressAdapter } from "../adapters/http-adapter/express-adapter"
import { createUserController } from "../use-cases/create-user"
import { getUsersController } from "../use-cases/get-users"
import { updateUserController } from "../use-cases/update-user"
import { authenticateUserController } from "../use-cases/authenticate-user"

import { AuthMiddleware } from "../middleware/auth/auth-middleware"
import { JsonWebTokenProvider } from "../providers/json-web-token-provider/json-web-token-provider"

import { secretKey } from "../config/enviroment-variables"

const jsonWebTokenProvider = new JsonWebTokenProvider(secretKey)
const authMiddleware = new AuthMiddleware(jsonWebTokenProvider)

const router = Router()

router.post("/users", (req, res) => {
  const adapter = new ExpressAdapter(req, res)
  createUserController.handle(adapter)
})

router.post("/users/auth", (req, res) => {
  const adapter = new ExpressAdapter(req, res)
  authenticateUserController.handle(adapter)
})

router.get("/users", (req, res) => {
  const adapter = new ExpressAdapter(req, res)
  getUsersController.handle(adapter)
})

router.put("/users", authMiddleware.handle(), (req, res) => {
  const adapter = new ExpressAdapter(req, res)
  updateUserController.handle(adapter)
})

export default router
