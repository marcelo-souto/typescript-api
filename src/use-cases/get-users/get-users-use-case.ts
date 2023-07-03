import { User } from "../../entities/user"
import { IGetUsersRepository } from "../../repositories/get-users/protocols"
import { IGetUsersUseCase } from "./protocols"

export class GetUsersUseCase implements IGetUsersUseCase {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}
  
  async execute(): Promise<User[]> {
    const users = await this.getUsersRepository.findAll()
    return users
  }
}
