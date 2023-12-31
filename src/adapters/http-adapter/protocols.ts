export interface IHttpResponse {
  statusCode: number
  message?: any
  data?: any
}

export interface IHttpRequest {
  headers?: any
  body?: any
  params?: any
}

export interface IHttpContext {
  getRequest(): IHttpRequest
  sendResponse(response: IHttpResponse): void
}
