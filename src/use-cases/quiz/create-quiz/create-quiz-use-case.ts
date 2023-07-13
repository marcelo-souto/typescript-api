import { v4 } from "uuid"
import { ICreateQuizRepository } from "../../../repositories/quiz/create-quiz/protocols"
import { ICreateQuizParams, ICreateQuizUseCase } from "./protocols"

export class CreateQuizUseCase implements ICreateQuizUseCase {
  
  constructor(private readonly createQuizRepository: ICreateQuizRepository) {}

  async execute({ questions, id, name }: ICreateQuizParams): Promise<void> {
    
    const user = await this.createQuizRepository.findUserById(id)
    if (!user) throw new Error("Usuário não encontrado.")

    const questionsWithId = questions.map((question) => ({
      ...question,
      id: v4(),
    }))

    await this.createQuizRepository.create({
      id: v4(),
      user,
      name,
      questions: questionsWithId,
    })
  }
}
