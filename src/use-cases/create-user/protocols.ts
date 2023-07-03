import { User } from "../../entities/user"

export interface ICreateUserUseCase {
  execute(data: Omit<User, "id">): Promise<void>
}