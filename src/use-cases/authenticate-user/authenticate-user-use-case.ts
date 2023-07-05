import { compare } from "bcrypt"
import { User } from "../../entities/user"
import { IAuthenticateUserRepository } from "../../repositories/authenticate-user/protocols"
import { IAuthenticateUserParams, IAuthenticateUserUseCase } from "./protocols"

export class AuthenticateUserUseCase implements IAuthenticateUserUseCase {
  constructor(
    private authenticateUserRepository: IAuthenticateUserRepository
  ) {}

  async execute({ email, password }: IAuthenticateUserParams): Promise<User> {

    const user = await this.authenticateUserRepository.findByEmail(email)
    if (!user) throw new Error("Usuário ou senha incorretos.")

    const passwordIsValid = await compare(password, user.password)
    if (!passwordIsValid) throw new Error("Usuário ou senha incorretos.")

    return user
  }
}
