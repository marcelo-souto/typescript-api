import { IJsonWebTokenPayload, IJsonWebTokenProvider } from "./protocols"
import { sign, verify } from "jsonwebtoken"

export class JsonWebTokenProvider implements IJsonWebTokenProvider {
  constructor(private secretKey: string, private expiresIn: string | number) {}

  generateToken<T>(data: T): string {
    const token = sign({ data }, this.secretKey, { expiresIn: this.expiresIn })
    return token
  }

  verifyToken(token: string): string | IJsonWebTokenPayload {
    const data = verify(token, this.secretKey)
    return data
  }
}
