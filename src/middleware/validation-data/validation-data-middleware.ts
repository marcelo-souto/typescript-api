import { NextFunction, Request, Response } from "express"
import { AnyZodObject, ZodError } from "zod"

export class ValidationDataMiddleware {
  handle(schema: AnyZodObject) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        await schema.parseAsync(req.body)
        return next()
      } catch (error) {
        if (error instanceof ZodError) {
          return res.status(400).json(error.errors)
        }
      }
    }
  }
}
