import { Quiz } from "../../../entities/Quiz"

export interface ICorrectQuizRepository {
  findById(id: string): Promise<Quiz | null>
}
