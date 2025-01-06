// "use strict";
// global scope / window scope
var a = 1;

function test() {
  // local scope
  var b = 2;
  console.log(b);
  // name conflict
  var a = 10;
  console.log(a);
}

test();
// console.log(b); // b is undefined