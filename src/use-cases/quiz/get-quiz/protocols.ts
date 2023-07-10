import { Question } from "../../../entities/Question"

export interface QuizResponse {
  id: string
  questions: Omit<Question, "corrected_option" | "quiz">[]
}
export interface IGetQuizUseCase {
  execute(id: string): Promise<QuizResponse | null>
}
