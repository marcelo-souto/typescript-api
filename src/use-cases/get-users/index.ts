import { GetUsersController } from "../../controllers/get-users/protocols"
import { GetUsersRepository } from "../../repositories/get-users/get-users-repository"
import { GetUsersUseCase } from "./get-users-use-case"

const getUsersRepository = new GetUsersRepository()
const getUsersUseCase = new GetUsersUseCase(getUsersRepository)
const getUsersController = new GetUsersController(getUsersUseCase)

export { getUsersController }
