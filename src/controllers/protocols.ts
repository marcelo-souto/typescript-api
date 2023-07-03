export interface IHttpResponse<T> {
  statusCode: number
  data: T
}

export interface IHttpRequest {
  headers?: any
  body?: any
  params?: any
}