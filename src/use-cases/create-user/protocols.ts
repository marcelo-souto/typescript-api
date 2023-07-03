export interface ICreateUserParams {
  name: string
  email: string
  password: string
}

export interface ICreateUserUseCase {
  execute(data: ICreateUserParams): Promise<void>
}