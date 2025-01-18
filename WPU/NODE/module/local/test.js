function printName(name) {
  return `Hello ${name}`;
}

const PI = 3.14;

const student = {
  name: "Ridho",
  age: 20,
  printStudent() {
    return `Name: ${this.name}, Age: ${this.age}`
  },
};

class Person {
  constructor() {
    console.log("Person created");
  }
}

// module.exports.printName = printName
// module.exports.PI = PI
// module.exports.student = student
// module.exports.Person = Person

// module.exports = {
//   printName: printName,
//   PI: PI,
//   student: student,
//   Person: Person
// };

// ES6 if property name and value are same =>
module.exports = {
  printName,
  PI,
  student,
  Person,
};