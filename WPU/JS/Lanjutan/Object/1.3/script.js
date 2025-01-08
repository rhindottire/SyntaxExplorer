// ini adalah prototype inheritance
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// };
// Mahasiswa.prototype.makan = function(porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, Selamat makan!`;
// };
// Mahasiswa.prototype.main = function(jam) {
//   this.energi -= jam;
//   return `Halo ${this.nama}, Selamat bermain!`;
// };
// Mahasiswa.prototype.tidur = function(jam) {
//   this.energi += jam * 2;
//   return `Halo ${this.nama}, Selamat tidur!`;
// };
// let ridho = new Mahasiswa(`ACHMAD RIDHO FA'IZ`, 10);

// Inheritance (keyword class)
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }
  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, Selamat makan!`;
  }
  main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, Selamat bermain!`;
  }
  tidur(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, Selamat tidur!`;
  }
};
let ridho = new Mahasiswa(`ACHMAD RIDHO FA'IZ`, 10);

// let angka = [];
// let angka = new Array();
// function Array() {
//   let this = Object.create(Array.prototype);
// }
console.log(Array.prototype);