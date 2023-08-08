export interface IUpdateUserParams {
  id: string
  name?: string
  email?: string
}

export interface IUpdateUserUseCase {
  execute(data: IUpdateUserParams): Promise<void>
}
