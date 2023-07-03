import { IHttpContext } from "../../adapters/http-adapter/protocols"
export interface ICreateUserController {
  handle(ctx: IHttpContext): Promise<void>
}