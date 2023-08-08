import { IDeleteQuizRepository } from "../../../repositories/quiz/delete-quiz/protocols"
import { IDeleQuizUseCase, IDeleteQuizParams } from "./protocols"

export class DeleteQuizUseCase implements IDeleQuizUseCase {
  constructor(private readonly deleteQuizRepository: IDeleteQuizRepository) {}

  async execute({ id, quiz_id }: IDeleteQuizParams): Promise<void> {
    
    const quiz = await this.deleteQuizRepository.findById(quiz_id)
    if (!quiz) throw new Error("Quiz não encontrado.")

    if (quiz.user.id !== id) throw new Error("Voce nao tem permissão.")

    await this.deleteQuizRepository.delete(quiz)
  }
}
