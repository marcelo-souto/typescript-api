import { IJsonWebTokenProvider } from "../../providers/json-web-token-provider/protocols"
import { NextFunction, Request, Response } from "express"

export class AuthMiddleware {
  constructor(private jsonWebTokenProvider: IJsonWebTokenProvider) {}

  handle() {
    return (req: Request, res: Response, next: NextFunction) => {
      const header = req.headers["authorization"]
      const token = header && header.split(" ")[1]

      try {
        if (!token) throw new Error()

        const data = this.jsonWebTokenProvider.verifyToken<{ id: string }>(token)
        req.body.id = data.id

        next()
      } catch (error: any) {
        return res.status(401).json("Não autorizado.")
      }
    }
  }
}
