const fs = require("fs");

// fs 모듈은 파일시스템에 접근하는 모듀ㄹ

fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  console.log(data.toString());
});
