import dotenv from "dotenv"

dotenv.config()

const secretKey = process.env.SECRET_KEY ?? ''

export { secretKey }
