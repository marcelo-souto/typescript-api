import { User } from "../../entities/user"
import { IUpdateUserRepository } from "../../repositories/update-user/protocols"
import { IUpdateUserParams, IUpdateUserUseCase } from "./protocols"

export class UpdateUserUseCase implements IUpdateUserUseCase {
  constructor(private readonly updateUserRepository: IUpdateUserRepository) {}

  async execute(data: IUpdateUserParams): Promise<void> {

    const user = await this.updateUserRepository.findById(data.id)
    if (!user) throw new Error("Usuário não encontrado")

    const updatedUser = new User({
      ...user,
      email: data.email ? data.email : user.email,
      name: data.name ? data.name : user.name,
    })

    await this.updateUserRepository.update(updatedUser)
  }
}
