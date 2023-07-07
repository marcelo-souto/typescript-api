import { User } from "../../entities/User"
import { IGetUserRepository } from "../../repositories/get-user/protocols"
import { IGetUserUseCase } from "./protocols"

export class GetUserUseCase implements IGetUserUseCase {
  constructor(private readonly getUserRepository: IGetUserRepository) {}

  async execute(id: string): Promise<User | never> {

    const user = await this.getUserRepository.findById(id)
    if(!user) throw new Error('Usuário não encontrado.')

    return user
  }
}
