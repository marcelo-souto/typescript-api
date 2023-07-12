import { randomizeOptions } from "../../../helpers/ramdomizeOptions"
import { IGetQuizRepository } from "../../../repositories/quiz/get-quiz/protocols"
import { IGetQuizUseCase, QuizResponse } from "./protocols"

export class GetQuizUseCase implements IGetQuizUseCase {
  constructor(private readonly getQuizRepository: IGetQuizRepository) {}

  async execute(id: string): Promise<QuizResponse> {

    const quiz = await this.getQuizRepository.findById(id)
    if (!quiz) throw new Error("Quiz não encontrado.")

    const questions = quiz.questions.map(
      ({ options, corrected_option, ...rest }) => ({
        ...rest,
        options: randomizeOptions(options, corrected_option),
      })
    )

    return { ...quiz, questions }
  }
}