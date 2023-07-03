import { User } from "../../entities/user"
import { ICreateUserUseCase } from "./protocols"
import { IUsersRepository } from "../../repositories/users-repository/protocols"
import { v4  } from "uuid"

export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute({ email, name, password }: Omit<User, "id">): Promise<void> {

    const userAlreadyExists = await this.usersRepository.findByEmail(email)
    if (userAlreadyExists) throw new Error("User already exists.")

    const id = v4()

    const user = new User({ id, name, email, password })
    await this.usersRepository.save(user)
  }
}