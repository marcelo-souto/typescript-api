import { DeleteQuizController } from "../../../controllers/quiz/delete-quiz/delete-quiz-controller"
import { appDataSource } from "../../../database/data-source"
import { DeleteQuizRepository } from "../../../repositories/quiz/delete-quiz/delete-quiz-repository"
import { DeleteQuizUseCase } from "./delete-quiz-use-case"

const deleteQuizRepository = new DeleteQuizRepository(appDataSource)
const deleteQuizUseCase = new DeleteQuizUseCase(deleteQuizRepository)
const deleteQuizController = new DeleteQuizController(deleteQuizUseCase)

export { deleteQuizController }
