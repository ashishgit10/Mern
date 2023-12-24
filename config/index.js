import dotenv from "dotenv";
dotenv.config({
    path:"../.env"
});

export const PORT = process.env.PORT;
export const MONGODB_URI = process.env.MONGODB_URI;
export const DB_NAME = process.env.DB_NAME;

