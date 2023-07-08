import { User } from "../../../entities/User";

export interface IUpdateUserRepository {
  findById(id: string): Promise<User | null>
  update(updatedUser: User): Promise<void>
  findByEmail(email: string): Promise<User | null>
}
