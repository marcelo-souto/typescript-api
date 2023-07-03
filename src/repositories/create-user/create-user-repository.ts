import { User } from "../../entities/user"
import { database } from "../users-database"
import { ICreateUserRepository } from "./protocols"

export class CreateUserRepository implements ICreateUserRepository {
  constructor(private data: User[] = database) {}

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.data.find((user) => user.email === email)
    return user
  }

  async save(user: User): Promise<void> {
    this.data.push(user)
  }
}
