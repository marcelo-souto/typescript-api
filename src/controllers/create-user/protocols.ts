import { IHttpResponse, IHttpRequest } from "../protocols"
import { IHttpContext } from "../../adapters/http-adapter/protocols"
export interface ICreateUserController {
  handle(context: IHttpContext): void
}
