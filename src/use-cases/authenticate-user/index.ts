import { AuthenticateUserController } from "../../controllers/authenticate-user/authenticate-user-controller"
import { JsonWebTokenProvider } from "../../providers/json-web-token-provider/json-web-token-provider"
import { AuthenticateUserRepository } from "../../repositories/authenticate-user/authenticate-user-repository"
import { AuthenticateUserUseCase } from "./authenticate-user-use-case"

import { jwtExpirationDate, secretKey } from "../../config/enviroment-variables"

const authenticateUserRepository = new AuthenticateUserRepository()

const jsonWebTokenProvider = new JsonWebTokenProvider(secretKey, jwtExpirationDate)
const authenticateUserUseCase = new AuthenticateUserUseCase(
  authenticateUserRepository,
  jsonWebTokenProvider
)
const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
)

export { authenticateUserController }
