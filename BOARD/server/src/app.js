import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

import connect from "../schemas";
import indexRouter from "../routes";
import userRouter from "../routes/user";

const PORT = process.env.port || 4000;

const app = express();
connect();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/", indexRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
