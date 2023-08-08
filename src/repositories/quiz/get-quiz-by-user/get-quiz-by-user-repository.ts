import { DataSource } from "typeorm"
import { Quiz } from "../../../entities/Quiz"
import { IGetQuizByUserRepository } from "./protocols"

export class GetQuizByUserRepository implements IGetQuizByUserRepository {
  constructor(private dataSource: DataSource) {}

  async findQuizByUser(id: string): Promise<Quiz[]> {
    const quizzes = await this.dataSource
      .getRepository(Quiz)
      .find({ where: { user: { id: id } } })

    return quizzes
  }
}
