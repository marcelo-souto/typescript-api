import { validate } from "../../helpers/validate"
import { IUpdateUserRepository } from "../../repositories/update-user/protocols"
import { IUpdateUserParams, IUpdateUserUseCase } from "./protocols"

export class UpdateUserUseCase implements IUpdateUserUseCase {
  constructor(private readonly updateUserRepository: IUpdateUserRepository) {}

  async execute({ email, name, id }: IUpdateUserParams): Promise<void> {
    
    const user = await this.updateUserRepository.findById(id)
    if (!user) throw new Error("Usuário não encontrado")

    if (email) {
      validate({ data: { email }, type: "email" })
      const isEmailAlreadyUsed = await this.updateUserRepository.findByEmail(email)
      if (isEmailAlreadyUsed) throw new Error("Email já utilizado.")
    }

    if (name) validate({ data: { name } })

    await this.updateUserRepository.update({
      ...user,
      email: email ? email : user.email,
      name: name ? name : user.name,
    })
  }
}
