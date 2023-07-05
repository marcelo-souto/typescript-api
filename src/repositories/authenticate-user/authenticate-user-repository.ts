import { User } from "../../entities/user"
import { database } from "../users-database"
import { IAuthenticateUserRepository } from "./protocols"

export class AuthenticateUserRepository implements IAuthenticateUserRepository {
  constructor(private readonly data: User[] = database) {}

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.data.find((user) => user.email === email)
    return user
  }
}
