import { Router } from "express"
import { ExpressAdapter } from "../adapters/http-adapter/express-adapter"
import { createUserController } from "../use-cases/user/create-user"
import { getUserController } from "../use-cases/user/get-user"
import { updateUserController } from "../use-cases/user/update-user"
import { authenticateUserController } from "../use-cases/user/authenticate-user"
import { authMiddleware } from "../middleware/auth"

const router = Router()

router.post("/create", (req, res) => {
  const adapter = new ExpressAdapter(req, res)
  createUserController.handle(adapter)
})

router.post("/auth", (req, res) => {
  const adapter = new ExpressAdapter(req, res)
  authenticateUserController.handle(adapter)
})

router.get("/me", authMiddleware.handle(), (req, res) => {
  const adapter = new ExpressAdapter(req, res)
  getUserController.handle(adapter)
})

router.put("/update", authMiddleware.handle(), (req, res) => {
  const adapter = new ExpressAdapter(req, res)
  updateUserController.handle(adapter)
})

export default router
