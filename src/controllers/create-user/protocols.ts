import { IHttpResponse, IHttpRequest } from "../protocols"

export interface ICreateUserController {
  handle(request: IHttpRequest): Promise<IHttpResponse<string>>
}
