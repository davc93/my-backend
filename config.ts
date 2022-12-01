import dotenv from "dotenv";
dotenv.config()

export const config= {
    PORT: process.env.PORT ?? 3000,
    MONGO:{
        USERNAME:process.env.DB_USER,
        PASSWORD:process.env.DB_PASSWORD
    }
}