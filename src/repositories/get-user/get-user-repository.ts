import { DataSource } from "typeorm"
import { User } from "../../entities/User"
import { IGetUserRepository } from "./protocols"

export class GetUserRepository implements IGetUserRepository {
  constructor(private dataSource: DataSource) {}

  async findById(id: string): Promise<User | null> {
    const user = await this.dataSource.getRepository(User).findOne({
      where: { id: id },
    })
    return user
  }
}
