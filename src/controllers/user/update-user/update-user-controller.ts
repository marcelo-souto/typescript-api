import { IHttpContext } from "../../../adapters/http-adapter/protocols"
import { IUpdateUserUseCase } from "../../../use-cases/user/update-user/protocols" 
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

      ctx.sendResponse({ statusCode: 200, message: "Atualizado com sucesso." })
    } catch (error: any) {
      ctx.sendResponse({ statusCode: 400, message: error.message })
    }
  }
}
