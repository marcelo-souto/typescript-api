import { GetUserController } from "../../controllers/get-user/get-user-controller"
import { GetUserRepository } from "../../repositories/get-user/get-user-repository"
import { GetUserUseCase } from "./get-user-use-case"

const getUserRepository = new GetUserRepository()
const getUserUseCase = new GetUserUseCase(getUserRepository)
const getUserController = new GetUserController(getUserUseCase)

export { getUserController }
