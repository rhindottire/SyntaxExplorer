var str = "";

// for ( var i = 0; i < 10; i++ ) {
//   str += "*";
// }

// for ( var i = 0; i < 10; i++ ) {
//   str += "*";
//   str += "\n";
// }

// for ( var i = 0; i < 10; i++ ) {
//   for ( var j = 0; j < 10; j++ ) {
//     str += "*";
//   }
//   str += "\n";
// }

// for ( var i = 0; i < 7; i++ ) {
//   for ( var j = 0; j < 10; j++ ) {
//     str += "*";
//   }
//   str += "\n";
// }

// for ( var colom = 0; colom < 10; colom++ ) {
//   for ( var baris = 0; baris <= colom; baris++ ) {
//     str += "*";
//   }
//   str += "\n";
// }

// for ( var colom = 10; colom > 0; colom-- ) {
//   for ( var baris = 0; baris < colom; baris++ ) {
//     str += "*";
//   }
//   str += "\n";
// }

// unfinished

var star = 5;
for ( var cols = 0; cols < star; cols++ ) {
  for ( var space = 0; space < star - cols; space++ ) {
    str += " ";
  }
  for ( var rows = 0; rows < cols; rows++ ) {
    str += "*";
  }
  str += "\n";
}

console.log(str);