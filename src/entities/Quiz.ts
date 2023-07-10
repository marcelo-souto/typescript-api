import { Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm"
import { User } from "./User"
import { Question } from "./Question"

@Entity("quizzes")
export class Quiz {
  @PrimaryColumn()
  id: string

  @ManyToOne(() => User, (user) => user.quizzes)
  user: User

  @OneToMany(() => Question, (question) => question.quiz, { cascade: true, eager: false })
  questions: Question[]
}
