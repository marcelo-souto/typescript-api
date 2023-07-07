import { Column, Entity, PrimaryColumn } from "typeorm"

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
}