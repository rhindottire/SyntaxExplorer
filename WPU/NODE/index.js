// node .
// node index
// node index.js
console.log("Hello World");
// console.log(window); // undefined in node

// require("./test/script"); // module system in node js
const printName = require("./test/script");
console.log(printName("Ridho"));