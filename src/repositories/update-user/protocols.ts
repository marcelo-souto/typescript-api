import { User } from "../../entities/user"

export interface IUpdateUserRepository {
  findById(id: string): Promise<User | undefined>
  update(updatedUser: User): Promise<void>
}
