import { Quiz } from "../../../entities/Quiz";

export interface IGetQuizByUserRepository {
  findQuizByUser(id: string): Promise<Quiz[]>
}
