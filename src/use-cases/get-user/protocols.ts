import { User } from "../../entities/User"

export interface IGetUserUseCase {
  execute(id: string): Promise<User | never>
}
