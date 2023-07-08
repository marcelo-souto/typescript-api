import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm"
import { Quiz } from "./Quiz"

@Entity("questions")
export class Question {
  @PrimaryColumn()
  id: string

  @Column({ type: "json" })
  options: string[]

  @Column({ type: "varchar", length: 255 })
  corrected_option: string

  @ManyToOne(() => Quiz, quiz => quiz.questions)
  quiz: Quiz
}
