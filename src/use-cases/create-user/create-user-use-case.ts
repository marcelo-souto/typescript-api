import { User } from "../../entities/user"
import { ICreateUserParams, ICreateUserUseCase } from "./protocols"
import { ICreateUserRepository } from "../../repositories/create-user/protocols"
import { v4 } from "uuid"
import { hash } from "bcrypt"
import { validate } from "../../helpers/validate"

export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(private readonly usersRepository: ICreateUserRepository) {}

  async execute({ email, name, password }: ICreateUserParams): Promise<void> {

    const userAlreadyExists = await this.usersRepository.findByEmail(email)
    if (userAlreadyExists) throw new Error("Usuário já existe.")

    validate({ data: { email }, type: "email", isRequired: true })
    validate({ data: { name }, isRequired: true })
    validate({ data: { password }, type: "password", isRequired: true })

    const id = v4()
    const hashedPassword = await hash(password, 10)

    const user = new User({ id, name, email, password: hashedPassword })
    await this.usersRepository.save(user)
  }
}
