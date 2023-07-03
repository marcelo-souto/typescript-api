import { User } from "../../entities/user";

export interface IGetUsersRepository {
  findAll(): Promise<User[]>
}