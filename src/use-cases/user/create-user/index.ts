import { CreateUserController } from "../../../controllers/user/create-user/create-user-controller"
import { CreateUserRepository } from "../../../repositories/user/create-user/create-user-repository"
import { CreateUserUseCase } from "./create-user-use-case"
import { appDataSource } from "../../../database/data-source"

const usersRepository = new CreateUserRepository(appDataSource)

const createUserUseCase = new CreateUserUseCase(usersRepository)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }
