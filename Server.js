import express from "express";
import connectDb from "./src/db/Connections.js";
import  {PORT}  from "./config/index.js";
const app = express();

connectDb();

app.listen(PORT, console.log(`Backend is running on port:${PORT}`));

app.get("/", (req, res) => {
  res.send("<h1>Hello from Server</h1>");
});
