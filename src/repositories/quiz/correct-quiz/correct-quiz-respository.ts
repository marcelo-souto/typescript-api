import { DataSource } from "typeorm"
import { ICorrectQuizRepository } from "./protocols"
import { Quiz } from "../../../entities/Quiz"

export class CorrectQuizRepository implements ICorrectQuizRepository {
  constructor(private dataSource: DataSource) {}

  async findById(id: string): Promise<Quiz | null> {
    const quiz = await this.dataSource
      .getRepository(Quiz)
      .findOne({ where: { id: id }, relations: { questions: true } })

    return quiz
  }
}
