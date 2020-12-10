const fs = require("fs");

setInterval(() => {
  fs.unlink("./asd.js", (err) => {
    if (err) {
      console.error(err);
    }
  });
}, 1000);
