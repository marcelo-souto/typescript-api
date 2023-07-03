import { User } from "../../entities/user"
import { ICreateUserParams, ICreateUserUseCase } from "./protocols"
import { ICreateUserRepository } from "../../repositories/create-user/protocols"
import { v4 } from "uuid"

export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(private readonly usersRepository: ICreateUserRepository) {}

  async execute({ email, name, password }: ICreateUserParams): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email)
    if (userAlreadyExists) throw new Error("User already exists.")

    const id = v4()

    const user = new User({ id, name, email, password })
    await this.usersRepository.save(user)
  }
}