import { IHttpContext } from "../../../adapters/http-adapter/protocols"
import { IGetUserUseCase } from "../../../use-cases/user/get-user/protocols"
import { IGetUserController } from "./protocols"

export class GetUserController implements IGetUserController {
  constructor(private getUserUseCase: IGetUserUseCase) {}

  async handle(ctx: IHttpContext): Promise<void> {
    const { id } = ctx.getRequest().body

    try {
      const users = await this.getUserUseCase.execute(id)
      ctx.sendResponse({ statusCode: 201, body: users })
    } catch (error: any) {
      ctx.sendResponse({ statusCode: 400, body: error.message })
    }
  }
}
