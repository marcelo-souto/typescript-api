import { ICorrectQuizRepository } from "../../../repositories/quiz/correct-quiz/protocols"
import {
  ICorrectQuizParams,
  ICorrectQuizResponse,
  ICorrectQuizUseCase,
} from "./protocols"

export class CorrectQuizUseCase implements ICorrectQuizUseCase {

  constructor(private readonly correctQuizRepository: ICorrectQuizRepository) {}

  async execute(data: ICorrectQuizParams): Promise<ICorrectQuizResponse> {

    const { email, quiz_id, answers } = data

    const quiz = await this.correctQuizRepository.findById(quiz_id)
    if (!quiz) throw new Error("Quiz não encontrado.")

    const questionsQuantity = quiz.questions.length

    if (questionsQuantity !== answers.length) throw new Error("Responda todas perguntas do quiz")

    const correctedAnswersQuantity = answers.filter(({ id, answer }) => {
      const question = quiz.questions.find((option) => option.id === id)
      return question?.corrected_option === answer
    }).length

    const result = {
      user: email,
      rightAnswers: correctedAnswersQuantity,
      wrongAnswers: questionsQuantity - correctedAnswersQuantity,
      answered: questionsQuantity,
      score: correctedAnswersQuantity,
      performance: correctedAnswersQuantity * 100 / questionsQuantity
    }

    return result
  }
}
