const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/user/login", (req, res, next) => {
  const { inputEmail, inputNickname } = req.body;

  console.log(inputEmail);
  console.log(inputNickname);

  res.status(200).send("수신 성공");
});

app.listen(4000, () => {
  console.log("4000 SERVER START");
});
