import { secretKey } from "../../config/enviroment-variables"
import { JsonWebTokenProvider } from "../../providers/json-web-token-provider/json-web-token-provider"
import { AuthMiddleware } from "./auth-middleware"

const jsonWebTokenProvider = new JsonWebTokenProvider(secretKey)
const authMiddleware = new AuthMiddleware(jsonWebTokenProvider)

export {authMiddleware}