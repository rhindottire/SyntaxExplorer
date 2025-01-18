// console.log("Hello World");

const validator = require("validator");
const chalk = require("chalk");
// npm install -g nodemon or npm install --save-dev nodemon
console.log(
  validator.isEmail("achmadaliridho46@gmail.com"),
  validator.isMobilePhone("081233261246", "id-ID"),
  validator.isNumeric("123"),
  chalk.black.bgBlue.bold.italic("Hello World")
);