import express from "express";
import helmet from "helmet";
import morgan from "morgan";

const app = express();
const PORT = 3000;

app.set("view engine", "pug");
app.use(helmet());
app.use(morgan(`dev`));

app.get("/sc1", (req, res) => {
  res.render("screens/screen1");
});
app.get("/sc2", (req, res) => {
  res.render("screens/screen2");
});
app.get("/sc3", (req, res) => {
  res.render("screens/screen3");
});
app.get("/sc4", (req, res) => {
  res.render("screens/screen4");
});

app.listen(PORT, () => {
  console.log(`${PORT} SERVER START`);
});
