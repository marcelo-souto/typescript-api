import { Quiz } from "../../../entities/Quiz"
import { IGetQuizRepository } from "../../../repositories/quiz/get-quiz/protocols"
import { IGetQuizUseCase } from "./protocols"

export class GetQuizUseCase implements IGetQuizUseCase {
  constructor(private readonly getQuizRepository: IGetQuizRepository) {}

  async execute(id: string): Promise<Quiz | null> {
    
    const quiz = await this.getQuizRepository.findById(id)
    if (!quiz) throw new Error("Quiz não encontrado.")

    return quiz
  }
}
