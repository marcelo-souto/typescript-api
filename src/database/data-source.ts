import "dotenv/config"
import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../entities/User"

const port = process.env.DB_PORT as number | undefined

export const appDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [User],
  migrations: ["./src/database/migrations/*.ts"],
})

const connectToDatabase = async () => {
  try {
    await appDataSource.initialize()
    console.log("Connected Successfully.")
  } catch (error: any) {
    console.log(error.message)
  }
}

export { connectToDatabase }
