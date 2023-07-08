import { Quiz } from "../../../entities/Quiz"

export interface IGetQuizUseCase {
  execute(id: string): Promise<Quiz | null>
}
