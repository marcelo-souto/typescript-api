import { IHttpContext } from "../../../adapters/http-adapter/protocols"
import { ICorrectQuizUseCase } from "../../../use-cases/quiz/correct-quiz/protocols"
import { ICorrectQuizController } from "./protocols"

export class CorrectQuizController implements ICorrectQuizController {
  constructor(private correctQuizUseCase: ICorrectQuizUseCase) {}

  async handle(ctx: IHttpContext): Promise<void> {

    const { email, quiz_id, answers } = ctx.getRequest().body

    try {

      const response = await this.correctQuizUseCase.execute({
        email,
        quiz_id,
        answers,
      })

      ctx.sendResponse({ statusCode: 200, data: response })
    } catch (error: any) {
      ctx.sendResponse({ statusCode: 400, message: error.message })
    }
    
  }
}
