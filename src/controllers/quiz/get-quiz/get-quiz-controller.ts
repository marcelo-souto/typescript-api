import { IHttpContext } from "../../../adapters/http-adapter/protocols"
import { IGetQuizUseCase } from "../../../use-cases/quiz/get-quiz/protocols"
import { IGetQuizController } from "./protocols"

export class GetQuizController implements IGetQuizController {
  constructor(private getQuizUseCase: IGetQuizUseCase) {}

  async handle(ctx: IHttpContext): Promise<void> {
    const { id } = ctx.getRequest().params

    try {
      
      const quiz = await this.getQuizUseCase.execute(id)
      ctx.sendResponse({ statusCode: 200, body: quiz })

    } catch (error: any) {
      ctx.sendResponse({ statusCode: 404, body: error.message })
    }
  }
}
