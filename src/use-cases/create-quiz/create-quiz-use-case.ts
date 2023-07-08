import { v4 } from "uuid"
import { ICreateQuizRepository } from "../../repositories/quiz/create-quiz/protocols"
import { ICreateQuizParams, ICreateQuizUseCase } from "./protocols"
import { Quiz } from "../../entities/Quiz"

export class CreateQuizUseCase implements ICreateQuizUseCase {
  constructor(private readonly createQuizRepository: ICreateQuizRepository) {}

  async execute(data: ICreateQuizParams): Promise<Pick<Quiz, "id">> {
    
    const user = await this.createQuizRepository.findUserById(data.id)
    if (!user) throw new Error("Usuário não encontrado.")

    const id = v4()
    const quiz = await this.createQuizRepository.create({ id, user })

    return quiz
  }
}
