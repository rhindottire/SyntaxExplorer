// Core Module and File System

const fs = require("fs"); // core module
// console.log(fs);
// writeFile: [Function: writeFile], // asynchronous
// writeFileSync: [Function: writeFileSync], // synchronous

// writeFileSync
// try {
//   fs.writeFileSync("data/test.txt", "Hello World Synchronous!"); // can't create directory
// } catch (error) {
//   console.log(error);
// }

// writeFile
// fs.writeFile("data/test.txt", "Hello World Asynchronous!", (error) => {
//   console.log(error);
// });

// readFileSync
// const data = fs.readFileSync("data/test.txt", "utf-8");
// console.log(data); without encoding // console.log(data.toString());

// readFile
// fs.readFile("data/test.txt", "utf-8", (error, data) => {
//   if (error) throw error;
//   console.log(data);
// });

// Readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input your name: ", (name) => {
  rl.question("Input your age: ", (age) => {
    console.log(`Name: ${name}, Age: ${age}`);
    rl.close();
  });
});