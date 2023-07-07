import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm"
import { User } from "./User"

@Entity("questions")
export class Question {
  @PrimaryColumn()
  id: string

  @Column({ type: "json" })
  options: string[]

  @Column({ type: "varchar", length: 255 })
  corrected_option: string

  @ManyToOne(() => User, user => user.questions)
  user: User
}
