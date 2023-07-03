import { CreateUserController } from "../../controllers/create-user/create-user-controller"
import { UsersRepository } from "../../repositories/users-repository/users-repository"
import { CreateUserUseCase } from "./create-user-use-case"

const usersRepository = new UsersRepository()

const createUserUseCase = new CreateUserUseCase(usersRepository)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }