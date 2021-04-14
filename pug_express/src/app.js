import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";

const PORT = 3000;

const app = express();

app.set("view engine", "pug");
app.use(helmet());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "/assets")));

app.get("/", (req, res) => {
  res.render("screens/index");
});

app.get("/page1", (req, res) => {
  res.render("screens/page1");
});

app.get("/page2", (req, res) => {
  res.render("screens/page2");
});

app.listen(PORT, () => {
  console.log(`${PORT} Server Express`);
});
