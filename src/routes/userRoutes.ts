import { Router } from "express"
import { ExpressAdapter } from "../adapters/http-adapter/express-adapter"
import { createUserController } from "../use-cases/create-user"
import { getUsersController } from "../use-cases/get-users"
import { updateUserController } from "../use-cases/update-user"
import { authenticateUserController } from "../use-cases/authenticate-user"

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

router.put("/users", (req, res) => {
  const adapter = new ExpressAdapter(req, res)
  updateUserController.handle(adapter)
})

export default router
