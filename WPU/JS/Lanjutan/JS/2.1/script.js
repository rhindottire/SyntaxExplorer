// 2.1 Execution, Context, Hoisting, Scope

// console.log(nama);
// var nama = 'Ridho';

// Creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// Execution phase

// console.log(sayHello);

// console.log(sayHello());
// var nama = 'Ridho';
// var age = 20;
// console.log(sayHello());

// function sayHello() {
//   return `Halo, nama saya ${nama}, saya ${age} tahun.`;
// }


// function membuat Local Execution
// yang di dalamnya terdapat creation dan execution context
// window
// arguments
// hoisting

// contoh 1
var nama = 'Ridho';
var username = 'rhindottire';
function cetakURL(username) {
  console.log(arguments[0]); // Data DODO dan EDHO masuk arguments jika function cetakURL()
  var instagramURL = 'http://instagram.com/';
  return instagramURL + username;
}
console.log(cetakURL(username));
console.log(cetakURL('DODO', 'EDHO'));

// contoh 2
function a() {
  console.log('ini a');
  function b() {
    console.log('ini b');
    function c() {
      console.log('ini c');
    }
    c();
  }
  b();
}
a();




// javascript visualizer
// https://pythontutor.com/javascript.html#mode=edit