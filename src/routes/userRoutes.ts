import { Router } from "express"
import { createUserController } from "../use-cases/create-user"
import { ExpressAdapter } from "../adapters/http-adapter/express-adapter"

const router = Router()

router.post("/users", (req, res) => {
  const adapter = new ExpressAdapter(req, res)
  createUserController.handle(adapter)
})

router.get("/users", (req, res) => res.send("Rodou"))

export default router
