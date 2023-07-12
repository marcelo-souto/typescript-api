import { Router } from "express"
import { createQuizController } from "../use-cases/quiz/create-quiz"
import { ExpressAdapter } from "../adapters/http-adapter/express-adapter"
import { authMiddleware } from "../middleware/auth"
import { getQuizController } from "../use-cases/quiz/get-quiz"
import { deleteQuizController } from "../use-cases/quiz/delete-quiz"

const router = Router()

router.post("/create", authMiddleware.handle(), (req, res) => {
  const adapter = new ExpressAdapter(req, res)
  createQuizController.handle(adapter)
})

router.get("/:id", (req, res) => {
  const adapter = new ExpressAdapter(req, res)
  getQuizController.handle(adapter)
})

router.delete("/:id", authMiddleware.handle(), (req, res) => {
  const adapter = new ExpressAdapter(req, res)
  deleteQuizController.handle(adapter)
})

export default router
