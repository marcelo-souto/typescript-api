import { Router } from "express"
import { ExpressAdapter } from "../adapters/http-adapter/express-adapter"
import { createUserController } from "../use-cases/user/create-user"
import { getUserController } from "../use-cases/user/get-user"
import { updateUserController } from "../use-cases/user/update-user"
import { authenticateUserController } from "../use-cases/user/authenticate-user"
import { authMiddleware } from "../middleware/auth"
import { validationDataMiddleware } from "../middleware/validation-data"

import { createUserSchema } from "../use-cases/user/create-user/create-user-zod-schema"
import { authenticateUserSchema } from "../use-cases/user/authenticate-user/authenticate-user-zod-schema"
import { updateUserSchema } from "../use-cases/user/update-user/update-user-zod-schema"

const router = Router()

router.post(
  "/create",
  validationDataMiddleware.handle(createUserSchema),
  (req, res) => {
    const adapter = new ExpressAdapter(req, res)
    createUserController.handle(adapter)
  }
)

router.post(
  "/auth",
  validationDataMiddleware.handle(authenticateUserSchema),
  (req, res) => {
    const adapter = new ExpressAdapter(req, res)
    authenticateUserController.handle(adapter)
  }
)

router.get("/me", authMiddleware.handle(), (req, res) => {
  const adapter = new ExpressAdapter(req, res)
  getUserController.handle(adapter)
})

router.put(
  "/update",
  authMiddleware.handle(),
  validationDataMiddleware.handle(updateUserSchema),
  (req, res) => {
    const adapter = new ExpressAdapter(req, res)
    updateUserController.handle(adapter)
  }
)

export default router
