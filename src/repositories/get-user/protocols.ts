import { User } from "../../entities/User"

export interface IGetUserRepository {
  findById(id: string): Promise<Omit<User, "password"> | null>
}
