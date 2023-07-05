import { User } from "../../entities/user"

export interface IAuthenticateUserRepository {
  findByEmail(email: string): Promise<User | undefined>
}
