import { IHttpContext } from "../../../adapters/http-adapter/protocols"
import { ICreateUserController } from "./protocols"
import { ICreateUserUseCase } from "../../../use-cases/user/create-user/protocols"

export class CreateUserController implements ICreateUserController {
  constructor(private createUserUseCase: ICreateUserUseCase) {}

  async handle(ctx: IHttpContext): Promise<void> {
    const { email, password, name } = ctx.getRequest().body

    try {
      await this.createUserUseCase.execute({ name, email, password })
      ctx.sendResponse({ statusCode: 201, message: "Criado com sucesso" })
    } catch (error: any) {
      ctx.sendResponse({ statusCode: 400, message: error.message })
    }
  }
}