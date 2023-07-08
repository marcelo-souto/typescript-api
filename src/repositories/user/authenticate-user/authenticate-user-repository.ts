import { DataSource } from "typeorm"
import { User } from "../../../entities/User"
import { IAuthenticateUserRepository } from "./protocols"

export class AuthenticateUserRepository implements IAuthenticateUserRepository {
  constructor(private readonly dataSource: DataSource) {}

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.dataSource.getRepository(User).findOne({
      where: { email: email },
    })
    return user
  }
}
