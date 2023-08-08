import { DataSource } from "typeorm"
import { Quiz } from "../../../entities/Quiz"
import { IDeleteQuizRepository } from "./protocols"

export class DeleteQuizRepository implements IDeleteQuizRepository {
  constructor(private dataSource: DataSource) {}

  async findById(id: string): Promise<Quiz | null> {
    const quiz = await this.dataSource
      .getRepository(Quiz)
      .findOne({ where: { id: id }, relations: { user: true } })

    return quiz
  }

  async delete(quiz: Quiz): Promise<void> {
    await this.dataSource.getRepository(Quiz).remove(quiz)
  }
}
