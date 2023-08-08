import { Quiz } from "../../../entities/Quiz"

export interface IGetQuizByUserUseCase {
  execute(id: string): Promise<Quiz[]>
}
