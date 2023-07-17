import { IHttpContext } from "../../../adapters/http-adapter/protocols"
import { IGetQuizByUserUseCase } from "../../../use-cases/quiz/get-quiz-by-user/protocols"
import { IGetQuizByUserController } from "./protocols"

export class GetQuizByUserController implements IGetQuizByUserController {
  constructor(private getQuizByUserUseCase: IGetQuizByUserUseCase) {}

  async handle(ctx: IHttpContext): Promise<void> {
    
    const { id } = ctx.getRequest().body

    try {
      const quizzes = await this.getQuizByUserUseCase.execute(id)
      ctx.sendResponse({ statusCode: 200, body: quizzes })
    } catch (error: any) {
      ctx.sendResponse({ statusCode: 400, body: error.message })
    }
  }
}
