export interface IDeleteQuizParams {
  id: string
  quiz_id: string
}

export interface IDeleQuizUseCase {
  execute(data: IDeleteQuizParams): Promise<void>
}
