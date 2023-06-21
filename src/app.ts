import "reflect-metadata";
import express, {
  Request,
} from "express";
import { Server } from "http";
import createHttpError from "http-errors";
import { config } from "dotenv";
import cors from "cors";
import { myConnection } from "./config/connectionConfig";
import morgan from "morgan";
import routes from "./routes/routes";

config();
const PORT: Number = Number(process.env.PORT) || 3000;
const app = express();
//Database connection
myConnection
  .initialize()
  .then(() => {
    console.log(`Data Source has been initialized`);
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
// App Configuration
app.use(cors<Request>());
app.use(express.json());
app.use("/", routes());
const server: Server = app.listen(PORT, () =>
  console.log(`Server is on Port ${PORT}`)
);
