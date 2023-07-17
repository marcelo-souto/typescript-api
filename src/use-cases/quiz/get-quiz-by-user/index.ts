import { GetQuizByUserController } from "../../../controllers/quiz/get-quiz-by-user/get-quiz-by-user-controller"
import { appDataSource } from "../../../database/data-source"
import { GetQuizByUserRepository } from "../../../repositories/quiz/get-quiz-by-user/get-quiz-by-user-repository"
import { GetQuizByUserUseCase } from "./get-quiz-by-user-use-case"

const getQuizByUserRepository = new GetQuizByUserRepository(appDataSource)
const getQuizByUserUseCase = new GetQuizByUserUseCase(getQuizByUserRepository)
const getQuizByUserController = new GetQuizByUserController(
  getQuizByUserUseCase
)

export { getQuizByUserController }
