import { CreateUserController } from "../../controllers/create-user/create-user-controller"
import { CreateUserRepository } from "../../repositories/create-user/create-user-repository"
import { CreateUserUseCase } from "./create-user-use-case"

const usersRepository = new CreateUserRepository()

const createUserUseCase = new CreateUserUseCase(usersRepository)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }
