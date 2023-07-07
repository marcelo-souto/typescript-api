import {
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from "typeorm"
import { User } from "./User"
import { Question } from "./Question"

@Entity("quizzes")
export class Quiz {
  @PrimaryColumn()
  id: string

  @ManyToOne(() => User, (user) => user.quizzes)
  user: User

  @ManyToMany(() => Question)
  @JoinTable()
  questions: Question[]
}
