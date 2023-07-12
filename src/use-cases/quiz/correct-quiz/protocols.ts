export interface ICorrectQuizResponse {
  rightAnswers: number
  wrongAnswers: number
  score: number,
  performance: number,
  answered: number
}

export interface IUserAnswer {
  id: string
  answer: string
}

export interface ICorrectQuizParams {
  email: string
  quiz_id: string
  answers: IUserAnswer[]
}

export interface ICorrectQuizUseCase {
  execute(data: ICorrectQuizParams): Promise<ICorrectQuizResponse>
}
