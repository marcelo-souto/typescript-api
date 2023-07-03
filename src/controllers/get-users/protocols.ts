import { IHttpContext } from "../../adapters/http-adapter/protocols"
import { IGetUsersUseCase } from "../../use-cases/get-users/protocols"
import { IGetUsersController } from "./get-users-controller"

export class GetUsersController implements IGetUsersController {
  constructor(private getUsersUseCase: IGetUsersUseCase) {}

  async handle(ctx: IHttpContext): Promise<void> {
    try {
      const users = await this.getUsersUseCase.execute()
      ctx.sendResponse({ statusCode: 201, body: users })
    } catch (error) {
      ctx.sendResponse({ statusCode: 400 })
    }
  }
}
