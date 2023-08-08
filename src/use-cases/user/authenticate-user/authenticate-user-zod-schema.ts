import { z } from "zod";

export const authenticateUserSchema = z.object({
  email: z.string().nonempty().email(),
  password: z.string().nonempty()
})