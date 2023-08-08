import { IHttpContext } from "../../../adapters/http-adapter/protocols"

export interface IGetQuizController {
  handle(ctx: IHttpContext): Promise<void>
}
