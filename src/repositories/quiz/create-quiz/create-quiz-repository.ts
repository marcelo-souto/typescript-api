import { DataSource } from "typeorm"
import { Quiz } from "../../../entities/Quiz"
import { ICreateQuizRepository } from "./protocols"
import { User } from "../../../entities/User"

export class CreateQuizRepository implements ICreateQuizRepository {
  constructor(private dataSource: DataSource) {}

  async findUserById(id: string): Promise<User | null> {
    const user = await this.dataSource
      .getRepository(User)
      .findOne({ where: { id: id } })

    return user
  }

  async create(quiz: Quiz): Promise<Quiz> {
    const newQuiz = this.dataSource.getRepository(Quiz).save(quiz)
    return newQuiz
  }
}
