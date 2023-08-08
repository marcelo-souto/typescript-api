import { IHttpContext } from "../../../adapters/http-adapter/protocols"
import { IGetUserUseCase } from "../../../use-cases/user/get-user/protocols"
import { IGetUserController } from "./protocols"

export class GetUserController implements IGetUserController {
  constructor(private getUserUseCase: IGetUserUseCase) {}

  async handle(ctx: IHttpContext): Promise<void> {
    const { id } = ctx.getRequest().body

    try {
      const user = await this.getUserUseCase.execute(id)
      ctx.sendResponse({ statusCode: 201, data: user })
    } catch (error: any) {
      ctx.sendResponse({ statusCode: 400, message: error.message })
    }
  }
}
