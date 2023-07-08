export interface IAuthenticateUserParams {
  email: string;
  password: string
}

export interface IAuthenticateUserUseCase {
  execute(data: IAuthenticateUserParams): Promise<string>
}