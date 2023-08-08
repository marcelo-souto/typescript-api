import dotenv from "dotenv"

dotenv.config()

const secretKey = process.env.SECRET_KEY ?? ""
const jwtExpirationDate = process.env.JWT_EXPIRATION_TIME ?? ""
const port = process.env.PORT || 8080

export { secretKey, port, jwtExpirationDate }
