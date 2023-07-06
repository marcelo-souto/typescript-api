import { IHttpContext } from "../../adapters/http-adapter/protocols"

export interface IGetUserController {
  handle(ctx: IHttpContext): Promise<void>
}
