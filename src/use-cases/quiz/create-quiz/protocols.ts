import { Question } from "../../../entities/Question"

export interface ICreateQuizParams {
  id: string
  name: string
  questions: Question[]
}

export interface ICreateQuizUseCase {
  execute(data: ICreateQuizParams): Promise<void>
}
