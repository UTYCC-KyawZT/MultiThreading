# Multithreading with Node.js

This project demonstrates how to use multithreading in Node.js by using worker threads. The project contains two folders: `singlethread` and `multithread`. Basically, it calls the same Fibonacci function 10 times in both of them and to see the difference between them for how long it takes to run in single thread and multi thread but the time might be different based on your PC specification.

## Singlethread

The `singlethread` folder contains an `index.js` file that demonstrates how to run the Fibonacci function in a single thread. To run the script, execute the following command in your terminal:

```bash
npm run singlethread
```
## Multithread

The `multithread` folder contains an `index.js` file that demonstrates how to run the Fibonacci function using worker threads. To run the script, execute the following command in your terminal:

```bash
npm run multithread
```

This will call the scripts from the package.json file and display the time taken to run the Fibonacci function in milliseconds for single thread and multi thread. So that you can see the time difference between them.