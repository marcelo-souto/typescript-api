import { Quiz } from "../../../entities/Quiz"
import { IGetQuizByUserRepository } from "../../../repositories/quiz/get-quiz-by-user/protocols"
import { IGetQuizByUserUseCase } from "./protocols"

export class GetQuizByUserUseCase implements IGetQuizByUserUseCase {

  constructor(private getQuizByUserRepository: IGetQuizByUserRepository) {}

  async execute(id: string): Promise<Quiz[]> {

    const quizzes = await this.getQuizByUserRepository.findQuizByUser(id)
    return quizzes

  }
}
