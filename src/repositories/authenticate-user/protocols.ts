import { User } from "../../entities/User"

export interface IAuthenticateUserRepository {
  findByEmail(email: string): Promise<User | null>
}
