import "dotenv/config"
import "reflect-metadata"
import { DataSource } from "typeorm"

const port = process.env.DB_PORT as number | undefined

export const appDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: ["./src/entities/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
  ssl: {}
})

export const connectToDatabase = async () => {

  try {
    await appDataSource.initialize()
    console.log("Database connected successfully.")

  } catch (error: any) {
    console.log(error.message)
  }
  
}
