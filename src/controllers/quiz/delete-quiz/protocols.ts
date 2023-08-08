import { IHttpContext } from "../../../adapters/http-adapter/protocols"

export interface IDeleteQuizController {
  handle(ctx: IHttpContext): Promise<void>
}
