import { User } from "../../../entities/User";

export interface ICreateUserRepository {
  findByEmail(email: string): Promise<User | null>
  save(user: Omit<User, "quizzes" | "questions">): Promise<void>
}
