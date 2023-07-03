import { User } from "../../entities/user"
import { database } from "../users-database"
import { IGetUsersRepository } from "./protocols"

export class GetUsersRepository implements IGetUsersRepository {
  constructor(private data: User[] = database) {}

  async findAll(): Promise<User[]> {
    return this.data
  }
}