import { Request, Response } from "express"
import { IHttpContext } from "./protocols"
import { IHttpRequest, IHttpResponse } from "./protocols"

export class ExpressAdapter implements IHttpContext {
  constructor(private request: Request, private response: Response) {}

  getRequest(): IHttpRequest {
    return {
      body: this.request.body,
      headers: this.request.headers,
      params: this.request.params,
    }
  }
  sendResponse(response: IHttpResponse): void {
    this.response.status(response.statusCode).json(response.body)
  }
}
