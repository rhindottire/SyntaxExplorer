// Membuat Object
// Object Literal
var students1 = {
  name : "ACHMAD RIDHO FA'IZ",
  nim : 230411100197,
  email : "achmadaliridho46gmail.com",
  study : "Computer Science"
};
var students2 = {
  name : "DODO RIEDHO",
  nim : 230411100198,
  email : "dodoriedho46gmail.com",
  study : "Teknik Informatika"
};

// function declaration
function buatObjectStudents(name, nim, email, study) {
  var students = {};
  students.name = name;
  students.nim = nim;
  students.email = email;
  students.study = study;
  return students;
}
var students3 = buatObjectStudents("EDHO RIDHO", 230411100199, "edhoridho46gmail.com", "Teknik Komputer");

// constructor
function Student(name, nim, email, study) {
  // var this = {};
  this.name = name;
  this.nim = nim;
  this.email = email;
  this.study = study;
  // return this;
}
var students4 = new Student("FA'IZ RIDHO", 230411100200, "faizridho46gmail.com", "Sistem Informasi");

console.log(students1);
console.log(students2);
console.log(students3);
console.log(students4);