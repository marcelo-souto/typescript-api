import { IHttpContext } from "../../../adapters/http-adapter/protocols";

export interface ICreateQuizController {
  handle(ctx: IHttpContext): Promise<void>
}
