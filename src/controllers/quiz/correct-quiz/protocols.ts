import { IHttpContext } from "../../../adapters/http-adapter/protocols"

export interface ICorrectQuizController {
  handle(ctx: IHttpContext): Promise<void>
}
