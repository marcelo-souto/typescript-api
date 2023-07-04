import { IHttpContext } from "../../adapters/http-adapter/protocols"
import { ICreateUserUseCase } from "../../use-cases/create-user/protocols"
import { ICreateUserController } from "./protocols"
export class CreateUserController implements ICreateUserController {
  constructor(private createUserUseCase: ICreateUserUseCase) {}

  async handle(ctx: IHttpContext): Promise<void> {
    const { email, password, name } = ctx.getRequest().body

    try {
      await this.createUserUseCase.execute({ name, email, password })
      ctx.sendResponse({ statusCode: 201, body: "Criado com sucesso" })
    } catch (err) {
      ctx.sendResponse({ statusCode: 400, body: "Error" })
    }
  }
}