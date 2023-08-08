import { CorrectQuizController } from "../../../controllers/quiz/correct-quiz/correct-quiz-controller"
import { appDataSource } from "../../../database/data-source"
import { CorrectQuizRepository } from "../../../repositories/quiz/correct-quiz/correct-quiz-respository"
import { CorrectQuizUseCase } from "./correct-quiz-use-case"

const correctQuizRepository = new CorrectQuizRepository(appDataSource)
const correctQuizUseCase = new CorrectQuizUseCase(correctQuizRepository)
const correctQuizController = new CorrectQuizController(correctQuizUseCase)

export { correctQuizController }
