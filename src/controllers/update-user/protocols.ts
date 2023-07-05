import { IHttpContext } from "../../adapters/http-adapter/protocols"

export interface IUpdateUserController {
  handle(ctx: IHttpContext): Promise<void>
}
