// function init () {
//   let nama = 'Ridho'; // variabel lokal
//   function tampilNama() { // inner function (closure)
//     console.log(nama); // akses ke parent variabel
//   }
//   // tampilNama();
//   // console.dir(tampilNama); // melihat closure
//   return tampilNama;
// }
// let panggilNama = init();
// panggilNama();



function init () {
  return function (nama) { // anonymous function
    console.log(nama);
  }
}
let panggilNama = init();
panggilNama('Ridho');



function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
  }
}
let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');
selamatPagi('Ridho');
selamatSiang('Edho');
selamatMalam('Dodo');


// cara 1
// let counter = 0; // global scope
// let add = function () {
//   let counter = 0; // local scope
//   // return ++counter;
//   return function () {
//     return ++counter;
//   }
// }
// counter = 100;
// let a = add();
// console.log(a());
// console.log(a());
// console.log(a());

// cara 2
let add = (function () { // imeediately invoked function expression (IIFE)
  let counter = 0; // private variabel
  return function () {
    return ++counter;
  }
})();
counter = 100;
console.log(add());
console.log(add());
console.log(add());