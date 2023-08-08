import { IHttpContext } from "../../../adapters/http-adapter/protocols"
import { IAuthenticateUserUseCase } from "../../../use-cases/user/authenticate-user/protocols"
import { IAuthenticateUserController } from "./protocols"

export class AuthenticateUserController implements IAuthenticateUserController {
  constructor(private authenticateUserUseCase: IAuthenticateUserUseCase) {}

  async handle(ctx: IHttpContext): Promise<void> {
    const { email, password } = ctx.getRequest().body

    try {
      const data = await this.authenticateUserUseCase.execute({
        email,
        password,
      })

      ctx.sendResponse({ statusCode: 200, data })
    } catch (error: any) {
      ctx.sendResponse({ statusCode: 400, message: error.message })
    }
  }
}
