// const fs = require("fs"); // core module
// const printName = require("./test"); // local module
// const moment = require("moment"); // npm or 3rd party module => node_modules

// const printName = require("./test");
// const PI = require("./test");

const test = require("./test");
console.log(
  test.printName("Ridho"),
  test.PI,
  test.student.printStudent(),
  new test.Person(),
);