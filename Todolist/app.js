const http = require("http");

const server = http.createServer((request, response) => {
  // What To Do?

  if (request.url === "/") {
    console.log(" 사용자가 현재 / 에 접속하였습니다.");
    response.write("<h1>hello</h1>");
  }
});

server.listen(3000, () => {
  console.log("3000 SERVER START");
});
