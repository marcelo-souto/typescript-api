import { User } from "../../entities/user"

export interface ICreateUserRepository {
  findByEmail(email: string): Promise<User | undefined>
  save(user: User): Promise<void>
}
