import { IHttpContext } from "../../../adapters/http-adapter/protocols"
import { IDeleQuizUseCase } from "../../../use-cases/quiz/delete-quiz/protocols"
import { IDeleteQuizController } from "./protocols"

export class DeleteQuizController implements IDeleteQuizController {
  constructor(private deleteQuizUseCase: IDeleQuizUseCase) {}

  async handle(ctx: IHttpContext): Promise<void> {
    const { quiz_id } = ctx.getRequest().params
    const { id } = ctx.getRequest().body

    try {
      await this.deleteQuizUseCase.execute({ id, quiz_id })
      ctx.sendResponse({ statusCode: 200, message: "Excluido com sucesso." })
    } catch (error: any) {
      ctx.sendResponse({ statusCode: 400, message: error.message })
    }
  }
}
