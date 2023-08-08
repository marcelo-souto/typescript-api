import { string, z } from "zod"

export const updateUserSchema = z.object({
  id: z.string().nonempty(),
  email: string().nonempty().email().optional(),
  name: string().nonempty().optional(),
})