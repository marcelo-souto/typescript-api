import { z } from "zod"

export const createQuizSchema = z.object({
  id: z.string().nonempty(),
  name: z.string().nonempty(),
  questions: z
    .array(
      z.object({
        text: z.string().nonempty(),
        corrected_option: z.string().nonempty(),
        options: z.array(z.string()).min(2),
      })
    )
    .nonempty(),
})
