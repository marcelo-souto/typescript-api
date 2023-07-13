import { z } from "zod"

export const correctQuizSchema = z.object({
  email: z.string().nonempty(),
  quiz_id: z.string().nonempty(),
  answers: z
    .array(
      z.object({ id: z.string().nonempty(), answer: z.string().nonempty() })
    )
    .nonempty(),
})