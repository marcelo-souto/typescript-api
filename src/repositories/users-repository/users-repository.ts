import { User } from "../../entities/user"
import { IUsersRepository } from "./protocols"

export class UsersRepository implements IUsersRepository {

  private users: User[] = []

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.email === email)
    return user
  }

  async save(user: User): Promise<void> {
    this.users.push(user)
  }
  
}