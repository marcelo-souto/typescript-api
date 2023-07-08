import { Quiz } from "../../../entities/Quiz"
import { User } from "../../../entities/User"


export interface ICreateQuizRepository {
  create(quiz: Omit<Quiz, "questions">): Promise<Pick<Quiz, "id">>
  findUserById(id: string): Promise<User | null>
}
