import { DataSource } from "typeorm"
import { User } from "../../entities/User"
import { ICreateUserRepository } from "./protocols"

export class CreateUserRepository implements ICreateUserRepository {
  constructor(private dataSource: DataSource) {}

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.dataSource
      .getRepository(User)
      .findOne({ where: { email: email } })

    return user
  }

  async save(user: User): Promise<void> {
    await this.dataSource.getRepository(User).save(user)
  }
}
