import { DataSource } from "typeorm"
import { Quiz } from "../../../entities/Quiz"
import { IGetQuizRepository } from "./protocols"

export class GetQuizRepository implements IGetQuizRepository {
  constructor(private dataSource: DataSource) {}

  async findById(id: string): Promise<Quiz | null> {
    
    const quiz = await this.dataSource.getRepository(Quiz).findOne({
      where: { id: id },
      relations: { questions: true },
      select: {
        id: true,
        user: { name: true },
        questions: { id: true, options: true, text: true },
      },
    })

    return quiz
  }
}
