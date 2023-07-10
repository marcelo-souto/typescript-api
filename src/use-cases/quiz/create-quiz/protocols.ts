import { Question } from "../../../entities/Question"
import { Quiz } from "../../../entities/Quiz"

export interface ICreateQuizParams {
  id: string
  questions: Question[]
}

export interface ICreateQuizUseCase {
  execute(data: ICreateQuizParams): Promise<void>
}
