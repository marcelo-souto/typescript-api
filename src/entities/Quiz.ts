import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm"
import { User } from "./User"
import { Question } from "./Question"

@Entity("quizzes")
export class Quiz {
  @PrimaryColumn()
  id: string

  @Column({ type: "varchar" })
  name: string

  @ManyToOne(() => User, (user) => user.quizzes)
  user: User

  @OneToMany(() => Question, (question) => question.quiz, {
    cascade: ["insert", "remove", "update"],
    onDelete: "CASCADE",
    eager: false,
  })
  questions: Question[]
}
