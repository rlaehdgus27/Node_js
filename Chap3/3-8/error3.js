const fs = require("fs").promises;

setInterval(() => {
  fs.unlink("./asd.js");
}, 1000);
