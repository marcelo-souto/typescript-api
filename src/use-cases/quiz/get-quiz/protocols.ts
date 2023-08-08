import { Question } from "../../../entities/Question"

export interface IGetQuizResponse {
  id: string
  questions: Omit<Question, "corrected_option" | "quiz">[]
}
export interface IGetQuizUseCase {
  execute(id: string): Promise<IGetQuizResponse | null>
}
