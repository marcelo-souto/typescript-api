import { Quiz } from "../../../entities/Quiz"

export interface IGetQuizRepository {
  findById(id: string): Promise<Quiz | null>
}
