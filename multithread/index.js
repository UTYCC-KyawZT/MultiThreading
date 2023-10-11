const { Worker } = require("worker_threads");

const doFib = async (iterations) => {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    // ---- Start worker
    const worker = new Worker("./fib.js", {
      workerData: {
        iterations,
      },
    });
    // ---- Lister for message from worker
    worker.once("message", (data) => {
      console.log(
        `worker [${worker.threadId}]: done in ${Date.now() - start}ms`
      );
      resolve(data);
    });
    worker.once('error', (err) => reject(err))
  });
};

const main = async () => {
  const start = Date.now();

  const values = await Promise.all([
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
  ]);

  console.log("values: ", values);
  console.log(`ALL DONE in ${Date.now() - start}ms`);
};

main().catch(console.error);
