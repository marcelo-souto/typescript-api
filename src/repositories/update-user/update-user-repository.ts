import { DataSource } from "typeorm"
import { User } from "../../entities/User"
import { IUpdateUserRepository } from "./protocols"

export class UpdateUserRepository implements IUpdateUserRepository {
  constructor(private dataSource: DataSource) {}

  async findById(id: string): Promise<User | null> {
    const user = await this.dataSource
      .getRepository(User)
      .findOne({ where: { id: id } })

    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    
    const user = await this.dataSource
      .getRepository(User)
      .findOne({ where: { email: email } })

    return user
  }

  async update(updatedUser: User): Promise<void> {
    await this.dataSource
      .getRepository(User)
      .update(updatedUser.id, updatedUser)
  }
}
