import { Router } from "express"
import { ExpressAdapter } from "../adapters/http-adapter/express-adapter"
import { createUserController } from "../use-cases/create-user"
import { getUsersController } from "../use-cases/get-users"

const router = Router()

router.post("/users", (req, res) => {
  const adapter = new ExpressAdapter(req, res)
  createUserController.handle(adapter)
})

router.get("/users", (req, res) => {
  const adapter = new ExpressAdapter(req, res)
  getUsersController.handle(adapter)
})

export default router
