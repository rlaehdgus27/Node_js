import express from "express";
import helmet from "helmet";

const app = express();

app.use(helmet());
app.set("views engine", "pug");
//1. Project Root Path의 "views" 폴더를 자동을 탐색.
//2. 확장자에 .pug를 붙인다.

app.get("/page1", (req, res) => {
  res.render("page1");
});

app.get("/page2", (req, res) => {
  res.render("page2");
});

app.get("/page3", (req, res) => {
  res.render("page3");
});

app.listen(3000, () => {
  console.log(`3000 PORT SERVER START`);
});
