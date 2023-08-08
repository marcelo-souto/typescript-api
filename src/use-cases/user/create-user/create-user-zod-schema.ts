import { z } from "zod"

export const createUserSchema = z.object({
  name: z.string().nonempty("").min(4),
  password: z.string().nonempty().min(8, "Deve ter pelo menos 8 caracteres"),
  email: z.string().nonempty().email(),
})