export interface IJsonWebTokenPayload {
  [key: string]: any
}

export interface IJsonWebTokenProvider {
  generateToken<T>(data: T): string
  verifyToken(token: string): string | IJsonWebTokenPayload
}
