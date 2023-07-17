import { Router } from "express"
import { createQuizController } from "../use-cases/quiz/create-quiz"
import { ExpressAdapter } from "../adapters/http-adapter/express-adapter"
import { authMiddleware } from "../middleware/auth"
import { getQuizController } from "../use-cases/quiz/get-quiz"
import { deleteQuizController } from "../use-cases/quiz/delete-quiz"
import { correctQuizController } from "../use-cases/quiz/correct-quiz"
import { validationDataMiddleware } from "../middleware/validation-data"

import { createQuizSchema } from "../use-cases/quiz/create-quiz/create-quiz-zod-schema"
import { correctQuizSchema } from "../use-cases/quiz/correct-quiz/correct-quiz-zod-schema"
import { getQuizByUserController } from "../use-cases/quiz/get-quiz-by-user"

const router = Router()

router.post(
  "/",
  authMiddleware.handle(),
  validationDataMiddleware.handle(createQuizSchema),
  (req, res) => {
    const adapter = new ExpressAdapter(req, res)
    createQuizController.handle(adapter)
  }
)

router.get("/:id", (req, res) => {
  const adapter = new ExpressAdapter(req, res)
  getQuizController.handle(adapter)
})

router.get("/", authMiddleware.handle(), (req, res) => {
  const adapter = new ExpressAdapter(req, res)
  getQuizByUserController.handle(adapter)
})

router.delete("/:id", authMiddleware.handle(), (req, res) => {
  const adapter = new ExpressAdapter(req, res)
  deleteQuizController.handle(adapter)
})

router.post(
  "/correct",
  validationDataMiddleware.handle(correctQuizSchema),
  (req, res) => {
    const adapter = new ExpressAdapter(req, res)
    correctQuizController.handle(adapter)
  }
)

export default router
