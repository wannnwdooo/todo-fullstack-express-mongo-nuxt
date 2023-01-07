import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { router } from "./router/todoRouter.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", router);

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DB OK"))
  .catch((err) => console.log("DB error", err));
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Server OK");
});
