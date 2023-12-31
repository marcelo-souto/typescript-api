import { UpdateUserController } from "../../../controllers/user/update-user/update-user-controller"
import { UpdateUserRepository } from "../../../repositories/user/update-user/update-user-repository"
import { UpdateUserUseCase } from "./update-user-use-case"
import { appDataSource } from "../../../database/data-source"

const updateUserRepository = new UpdateUserRepository(appDataSource)
const updateUserUseCase = new UpdateUserUseCase(updateUserRepository)
const updateUserController = new UpdateUserController(updateUserUseCase)

export { updateUserController }
