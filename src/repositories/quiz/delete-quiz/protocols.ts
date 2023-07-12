import { Quiz } from "../../../entities/Quiz"

export interface IDeleteQuizRepository {
  findById(id: string): Promise<Quiz | null>
  delete(quiz: Quiz): Promise<void>
}
