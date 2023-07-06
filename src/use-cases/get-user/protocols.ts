import { User } from "../../entities/user"

export interface IGetUserUseCase {
  execute(id: string): Promise<User | undefined>
}
