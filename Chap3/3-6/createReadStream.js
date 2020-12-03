const fs = require("fs");

const readStream = fs.createReadStream("./readme3.txt", { highWaterMark: 16 });
const data = [];

//highWaterMark = 버퍼의 크기를 정할 수 있다.

readStream.on("data", (chunk) => {
  data.push(chunk);
  console.log("data :", chunk, chunk.length);
});

readStream.on("end", () => {
  console.log("end :", Buffer.concat(data).toString());
});

readStream.on("error", (err) => {
  console.log("error :", err);
});
