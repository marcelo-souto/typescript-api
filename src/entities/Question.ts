import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm"
import { Quiz } from "./Quiz"

type Options = "a" | "b" | "c" | "d" | "e"
@Entity("questions")
export class Question {
  @PrimaryColumn()
  id: string

  @Column()
  text: string

  @Column({ type: "json" })
  options: Record<Options, string>

  @Column({ type: "varchar", length: 255 })
  corrected_option: string

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz
}
