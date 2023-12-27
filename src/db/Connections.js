import mongoose from "mongoose";
import Joi from "joi";
import { DB_NAME, MONGODB_URI } from "../../config/index.js";

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);

    console.log(`\n MongoDb Connected!! DB HOST:${connect.connection.host}`);
  } catch (error) {
    console.error("MongoDb Connection error:", error);
    process.exit(1);
  }
};
export default connectDb;
