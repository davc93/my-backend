import dotenv from "dotenv";
dotenv.config()

const DB = {
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME

}

export const config: any = {

    MONGO:`${DB.DB_NAME}`
}