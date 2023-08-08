import { User } from "../../../entities/User";

export interface IGetUserUseCase {
  execute(id: string): Promise<Omit<User, "password"> | never>
}
