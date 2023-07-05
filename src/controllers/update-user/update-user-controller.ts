import { IHttpContext } from "../../adapters/http-adapter/protocols"
import { IUpdateUserUseCase } from "../../use-cases/update-user/protocols"
import { IUpdateUserController } from "./protocols"

export class UpdateUserController implements IUpdateUserController {
  constructor(private updateUserUseCase: IUpdateUserUseCase) {}

  async handle(ctx: IHttpContext): Promise<void> {
    const { id, email, name } = ctx.getRequest().body

    try {
      await this.updateUserUseCase.execute({
        id,
        name,
        email,
      })

      ctx.sendResponse({ statusCode: 200, body: "Atualizado com sucesso." })
    } catch (error: any) {
      ctx.sendResponse({ statusCode: 400, body: error.message })
    }
  }
}
