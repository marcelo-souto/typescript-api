import { Question } from "../../../entities/Question"

export interface ICreateQuizParams {
  id: string
  questions: Question[]
}

export interface ICreateQuizUseCase {
  execute(data: ICreateQuizParams): Promise<void>
}
