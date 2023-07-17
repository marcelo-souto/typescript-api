import { IHttpContext } from "../../../adapters/http-adapter/protocols"

export interface IGetQuizByUserController {
  handle(ctx: IHttpContext): Promise<void>
}
