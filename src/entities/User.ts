import { Column, Entity, PrimaryColumn, OneToMany } from "typeorm"
import { Quiz } from "./Quiz"

@Entity("users")
export class User {
  @PrimaryColumn()
  id: string

  @Column({ type: "varchar", length: 200 })
  name: string

  @Column({ type: "varchar", length: 255, unique: true })
  email: string

  @Column({ type: "varchar", length: 255 })
  password: string

  @OneToMany(() => Quiz, (quiz) => quiz.user)
  quizzes: Quiz[]
}