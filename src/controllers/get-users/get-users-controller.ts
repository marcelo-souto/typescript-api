import { IHttpContext } from "../../adapters/http-adapter/protocols"
import { IGetUsersUseCase } from "../../use-cases/get-users/protocols"
import { IGetUsersController } from "./protocols"

export class GetUsersController implements IGetUsersController {
  constructor(private getUsersUseCase: IGetUsersUseCase) {}

  async handle(ctx: IHttpContext): Promise<void> {
    try {
      const users = await this.getUsersUseCase.execute()
      ctx.sendResponse({ statusCode: 201, body: users })
    } catch (error: any) {
      ctx.sendResponse({ statusCode: 400, body: error.message })
    }
  }
}
