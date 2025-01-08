// Cara untuk membuat Object pada Javascript

// 1. Object Literal
// PROBLEM : Tidak efektif untuk object yang banyak
let mahasiswa1 = {
  nama: "ACHMAD RIDHO FA'IZ",
  energi: 10,
  makan: function(porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, Selamat makan!`); // `` = backtick adalah string literal
  } // method (makan) adalah function yang ada di dalam object
};
let mahasiswa2 = {
  nama: "Ridho Fa'iz",
  energi: 20,
  makan: function(porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, Selamat makan!`);
  }
};

// 2. Function Declaration
// const methodMahasiswa = {
//   makan: function(porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, Selamat makan!`);
//   },
//   main: function(jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, Selamat bermain!`);
//   },
//   tidur: function(jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, Selamat tidur!`);
//   }
// };
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = methodMahasiswa.makan;
//   mahasiswa.main = methodMahasiswa.main;
//   mahasiswa.tidur = methodMahasiswa.tidur; // mendaftarkan method

//   return mahasiswa;
// };
// let ridho = Mahasiswa(`ACHMAD RIDHO FA'IZ`, 10);
// let faiz = Mahasiswa(`Ridho Fa'iz`, 20);

// 3. Constructor Function (keyword new)
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function(porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, Selamat makan!`);
//   }
//   this.main = function(jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, Selamat bermain!`);
//   }
// }
// let ridho = new Mahasiswa(`ACHMAD RIDHO FA'IZ`, 10);
// let faiz = new Mahasiswa(`Ridho Fa'iz`, 20);

// 4. Object.create()
const methodMahasiswa = {
  makan: function(porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, Selamat makan!`);
  },
  main: function(jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, Selamat bermain!`);
  },
  tidur: function(jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama}, Selamat tidur!`);
  }
};
function Mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMahasiswa); // methodMahasiswa adalah parent object
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  return mahasiswa;
};
let ridho = Mahasiswa(`ACHMAD RIDHO FA'IZ`, 10);
let faiz = Mahasiswa(`Ridho Fa'iz`, 20);