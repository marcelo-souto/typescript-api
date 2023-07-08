import { IHttpContext } from "../../../adapters/http-adapter/protocols"
import { ICreateQuizUseCase } from "../../../use-cases/quiz/create-quiz/protocols"
import { ICreateQuizController } from "./protocols"

export class CreateQuizController implements ICreateQuizController {
  constructor(private createQuizUseCase: ICreateQuizUseCase) {}

  async handle(ctx: IHttpContext): Promise<void> {
    const { id } = ctx.getRequest().body

    try {
      const quiz = await this.createQuizUseCase.execute({ id })
      ctx.sendResponse({ statusCode: 201, body: quiz })
    } catch (error: any) {
      ctx.sendResponse({ statusCode: 400, body: error.message })
    }
  }
}
