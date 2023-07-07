import { User } from "../../entities/User"

export interface ICreateUserRepository {
  findByEmail(email: string): Promise<User | null>
  save(user: User): Promise<void>
}
