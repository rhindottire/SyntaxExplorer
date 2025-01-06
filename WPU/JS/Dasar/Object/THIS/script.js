// THIS
console.log(this); // window (object global)
// console.log(window);
// console.log( this == window ); // true

var a = 1;
console.log(this.a);
// console.log(window.a);





// Cara 1 - Function Declaration
// function halo() {
//   // console.log(this);
//   console.log("halo");
// }
// halo();
// this.halo();
// this mengembalikan object global




// Cara 2 - Object Literal
// var obj = {};
// obj.halo = function () {
//   console.log(this);
//   console.log("halo");
// }
// obj.halo();
// this mengembalikan object yang bersangkutan ( obj )




// Cara 3 - Constructor
// function Halo() {
//   console.log(this);
//   console.log("halo");
// }
// var obj1 = new Halo();
// var obj2 = new Halo();
// this mengembalikan object yang baru di buat