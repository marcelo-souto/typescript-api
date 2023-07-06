import { User } from "../../entities/user"
import { database } from "../users-database"
import { IGetUserRepository } from "./protocols"

export class GetUserRepository implements IGetUserRepository {
  constructor(private data: User[] = database) {}

  async findById(id: string): Promise<User | undefined> {
    const user = this.data.find((user) => user.id === id)
    return user
  }
}
