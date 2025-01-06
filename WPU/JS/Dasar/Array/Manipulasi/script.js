// var arr = ["a", 1, true];
// console.log(arr);

// menambah isi array
// var arr = [];
// arr[0] = "a";
// arr[1] = 1;
// arr[2] = true;
// // arr[4] = null; // arr[3] undefined
// console.log(arr);

// // menghapus isi array
// var arr = ["a", 1, true];
// arr[1] = undefined;
// console.log(arr);

// menampilkan isi array
var arr = ["a", 1, true];
for (var i = 0; i < arr.length; i++) {
  console.log("Data Type ke-" + (i + 1) + " = " + typeof(arr[i]) + ", Value = " + arr[i]);
}