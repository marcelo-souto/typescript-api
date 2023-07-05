import { AuthenticateUserController } from "../../controllers/authenticate-user/authenticate-user-controller"
import { AuthenticateUserRepository } from "../../repositories/authenticate-user/authenticate-user-repository"
import { AuthenticateUserUseCase } from "./authenticate-user-use-case"

const authenticateUserRepository = new AuthenticateUserRepository()
const authenticateUserUseCase = new AuthenticateUserUseCase(
  authenticateUserRepository
)
const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
)

export { authenticateUserController }
