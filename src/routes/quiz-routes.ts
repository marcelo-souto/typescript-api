import { Router } from "express"
import { createQuizController } from "../use-cases/create-quiz"
import { ExpressAdapter } from "../adapters/http-adapter/express-adapter"
import { authMiddleware } from "../middleware/auth"

const router = Router()

router.post("/create", authMiddleware.handle(), (req, res) => {
  const adapter = new ExpressAdapter(req, res)
  createQuizController.handle(adapter)
})

export default router