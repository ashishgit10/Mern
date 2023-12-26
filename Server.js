import express from "express";
import connectDb from "./src/db/Connections.js";
import { PORT } from "./config/index.js";
import router from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());

app.use(router);
connectDb();

app.listen(PORT, console.log(`Backend is running on port:${PORT}`));

app.use(errorHandler);
