import { v4 } from "uuid"
import { ICreateQuizRepository } from "../../../repositories/quiz/create-quiz/protocols"
import { ICreateQuizParams, ICreateQuizUseCase } from "./protocols"
import { Quiz } from "../../../entities/Quiz"

export class CreateQuizUseCase implements ICreateQuizUseCase {
  constructor(private readonly createQuizRepository: ICreateQuizRepository) {}

  async execute({ questions, id }: ICreateQuizParams): Promise<void> {

    const user = await this.createQuizRepository.findUserById(id)
    if (!user) throw new Error("Usuário não encontrado.")

    const quiz = new Quiz()

    quiz.id = v4()
    quiz.user = user
    quiz.questions = questions.map((question) => ({ ...question, id: v4() }))

    await this.createQuizRepository.create(quiz)
  }
}
