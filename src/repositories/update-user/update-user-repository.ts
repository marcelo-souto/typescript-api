import { User } from "../../entities/user"
import { database } from "../users-database"
import { IUpdateUserRepository } from "./protocols"

export class UpdateUserRepository implements IUpdateUserRepository {
  constructor(private data: User[] = database) {}

  async findById(id: string): Promise<User | undefined> {
    return this.data.find((user) => user.id === id)
  }

  async update(updatedUser: User): Promise<void> {
    this.data = this.data.filter((user) => user.id !== updatedUser.id)
    this.data.push(updatedUser)
  }
}
