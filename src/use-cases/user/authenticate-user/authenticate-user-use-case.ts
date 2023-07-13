import { compare } from "bcrypt"
import { IAuthenticateUserRepository } from "../../../repositories/user/authenticate-user/protocols"
import { IAuthenticateUserParams, IAuthenticateUserUseCase } from "./protocols"
import { IJsonWebTokenProvider } from "../../../providers/json-web-token-provider/protocols"

export class AuthenticateUserUseCase implements IAuthenticateUserUseCase {
  constructor(
    private authenticateUserRepository: IAuthenticateUserRepository,
    private jsonWebTokenProvider: IJsonWebTokenProvider
  ) {}

  async execute({ email, password }: IAuthenticateUserParams): Promise<string> {
    
    const user = await this.authenticateUserRepository.findByEmail(email)
    if (!user) throw new Error("Usuário ou senha incorretos.")

    const passwordIsValid = await compare(password, user.password)
    if (!passwordIsValid) throw new Error("Usuário ou senha incorretos.")

    const token = this.jsonWebTokenProvider.generateToken<{ id: string }>({
      id: user.id,
    })

    return token
  }
}
