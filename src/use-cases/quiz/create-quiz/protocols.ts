import { Quiz } from "../../../entities/Quiz"

export interface ICreateQuizParams {
  id: string
}

export interface ICreateQuizUseCase {
  execute(data: ICreateQuizParams): Promise<Pick<Quiz, "id">>
}
