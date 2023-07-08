import { GetUserController } from "../../../controllers/user/get-user/get-user-controller"
import { GetUserRepository } from "../../../repositories/user/get-user/get-user-repository"
import { GetUserUseCase } from "./get-user-use-case"
import { appDataSource } from "../../../database/data-source"

const getUserRepository = new GetUserRepository(appDataSource)
const getUserUseCase = new GetUserUseCase(getUserRepository)
const getUserController = new GetUserController(getUserUseCase)

export { getUserController }
