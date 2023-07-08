import { CreateQuizController } from "../../controllers/quiz/create-quiz/create-quiz-controller"
import { appDataSource } from "../../database/data-source"
import { CreateQuizRepository } from "../../repositories/quiz/create-quiz/create-quiz-repository"
import { CreateQuizUseCase } from "./create-quiz-use-case"

const createQuizRepository = new CreateQuizRepository(appDataSource)
const createQuizUseCase = new CreateQuizUseCase(createQuizRepository)
const createQuizController = new CreateQuizController(createQuizUseCase)

export { createQuizController }
