import { Quiz } from "../../../entities/Quiz"
import { User } from "../../../entities/User"

export interface ICreateQuizRepository {
  create(quiz: Quiz): Promise<Quiz>
  findUserById(id: string): Promise<User | null>
}
