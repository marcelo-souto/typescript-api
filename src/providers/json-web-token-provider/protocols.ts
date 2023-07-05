export interface IJsonWebTokenProvider {
  generateToken<T extends { [key: string]: unknown }>(data: T): string
  verifyToken<T>(token: string): T
}
