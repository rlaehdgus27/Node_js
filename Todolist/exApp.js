const express = require("express");

const application = express();

application.get("/", (request, response) => {
  response.write("<h1>Hello world</h1>");
});

application.get("/dataTest", (req, res) => {
  res.write(`<h1>Hello world ${req.query.name}</h1>`);
});

application.listen(3005, () => {
  console.log("3005 SERVER START WITH EXPRESS");
});
