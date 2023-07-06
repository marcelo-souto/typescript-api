import { User } from "../../entities/user"
import { IGetUserRepository } from "../../repositories/get-user/protocols"
import { IGetUserUseCase } from "./protocols"

export class GetUserUseCase implements IGetUserUseCase {
  constructor(private readonly getUserRepository: IGetUserRepository) {}

  async execute(id: string): Promise<User | undefined> {
    const users = await this.getUserRepository.findById(id)
    return users
  }
}
