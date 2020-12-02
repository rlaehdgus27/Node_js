const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
  //부모일 떼
  const worker = new Worker(__filename);
  worker.on("message", (message) => console.log("from worher", message));
  worker.on("exit", () => console.log("worker exit"));
  worker.postMessage("ping");
} else {
  //워커일 때
  parentPort.on("message", (value) => {
    console.log("from parent", value);
    parentPort.postMessage("pong");
    parentPort.close();
  });
}
