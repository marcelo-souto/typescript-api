import { IHttpContext } from "../../../adapters/http-adapter/protocols";

export interface IAuthenticateUserController {
  handle(ctx: IHttpContext): Promise<void>
}