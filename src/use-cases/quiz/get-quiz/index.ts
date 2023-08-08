import { GetQuizController } from "../../../controllers/quiz/get-quiz/get-quiz-controller"
import { appDataSource } from "../../../database/data-source"
import { GetQuizRepository } from "../../../repositories/quiz/get-quiz/get-quiz-repository"
import { GetQuizUseCase } from "./get-quiz-use-case"

const getQuizRepository = new GetQuizRepository(appDataSource)
const getQuizUseCase = new GetQuizUseCase(getQuizRepository)
const getQuizController = new GetQuizController(getQuizUseCase)

export { getQuizController }
