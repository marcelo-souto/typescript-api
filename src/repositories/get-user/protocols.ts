import { User } from "../../entities/user"

export interface IGetUserRepository {
  findById(id: string): Promise<User | undefined>
}
