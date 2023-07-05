import { IJsonWebTokenProvider } from "./protocols"
import { sign, verify } from "jsonwebtoken"

export class JsonWebTokenProvider implements IJsonWebTokenProvider {
  constructor(
    private secretKey: string,
    private expiresIn: string | number = "10min"
  ) {}

  generateToken<T extends { [key: string]: unknown }>(data: T): string {
    const token = sign(data, this.secretKey, { expiresIn: this.expiresIn })
    return token
  }

  verifyToken<T>(token: string): T {
    const data = verify(token, this.secretKey)
    return data as T
  }
}