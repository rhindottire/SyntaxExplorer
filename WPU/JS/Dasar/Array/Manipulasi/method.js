var arr = ["ACHMAD", "RIDHO", "FA'IZ"];

// 1. Join
// console.log(arr.join()); // ACHMAD,RIDHO,FA'IZ
// console.log(arr.join(" ")); // ACHMAD RIDHO FA'IZ
// console.log(arr.join("-")); // ACHMAD-RIDHO-FA'IZ

// 2. Push & Pop (menambah dan menghapus dari akhir array)
// arr.push("DODO", "EDHO");
// console.log(arr); // ["ACHMAD", "RIDHO", "FA'IZ", "DODO", "EDHO"]
// arr.pop();
// arr.pop();
// console.log(arr); // ["ACHMAD", "RIDHO", "FA'IZ"]

// 3. Unshift & Shift (menambah dan menghapus dari awal array)
// arr.unshift("DODO", "EDHO");
// arr.shift();
// arr.shift();
// console.log(arr.join(" - "));

// var arr = ["ACHMAD", "RIDHO", "FA'IZ"];
// 4. Splice
// splice(start, deleteCount, item1, item2, ...., item-n);
// arr.splice(1, 0, "DODO", "EDHO");
// console.log(arr.join(" - "));

// 5. Slice
// var arr2 = arr.slice(1, 3); // ["DODO", "EDHO"]
// console.log(arr.join(" - "));
// console.log(arr2.join(" - "));

// 6. forEach
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var students = ["ACHMAD", "RIDHO", "FA'IZ"];
// for (var i = 0; i < number.length; i++) {
//   console.log(number[i]);
// }

// Expression Function
// var print = function (e) {
//   console.log(e);
// };
// number.forEach(print);

// Anonymous Function
// number.forEach(function (e) {
//   console.log(e);
// });

// Arrow Function
// students.forEach((e, i) => {
//   console.log("Student ke-" + (i + 1) + " = " + e);
// })

// 7. Map
// var rand = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
// var rand2 = rand.map(function (e) {
//   return e * 2;
// });
// console.log(rand2.join(" - ")); // [2, 20, 4, 18, 6, 16, 8, 14, 10, 12]

// 8. Sort
// var random = [1, 10, 20, 2, 3, 30, 40, 4, 5, 50];
// random .sort(function (a, b) {
//   return a - b;
// });
// console.log(random.join(" - ")); // [1, 2, 3, 4, 5, 10, 20, 30, 40, 50]

// 9. Filter & Find
var random = [1, 10, 20, 2, 3, 30, 40, 4, 5, 50];

var filter = random.filter(function (e) {
  return e >= 10;
});
console.log(filter.join(" - ")); // [10, 20, 30, 40, 50]

var find = random.find(function (e) {
  return e >= 10;
});
console.log(find); // 10