import dotenv from "dotenv"

dotenv.config()

const secretKey = process.env.SECRET_KEY ?? ""
const port = process.env.PORT || 3000

export { secretKey, port }
