import { IHttpContext } from "../../adapters/http-adapter/protocols";

export interface IGetUsersController {
  handle(ctx: IHttpContext): void
}