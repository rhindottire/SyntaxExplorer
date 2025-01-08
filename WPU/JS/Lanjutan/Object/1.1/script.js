// Cara untuk membuat Object pada Javascript

// 1. Object Literal
let mahasiswa1 = {
  nama: "ACHMAD RIDHO FA'IZ",
  energi: 10,
  makan: function(porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, Selamat makan!`); // `` = backtick adalah string literal
  } // method (makan) adalah function yang ada di dalam object
}
let mahasiswa2 = {
  nama: "Ridho Fa'iz",
  energi: 20,
  makan: function(porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, Selamat makan!`);
  }
}

// 2. Function Declaration
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function(porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, Selamat makan!`);
//   }
//   mahasiswa.main = function(jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, Selamat bermain!`);
//   }
//   return mahasiswa; // function declaration harus di return objectnya
// } // ini adalah blueprint/template yang harus di instansiasi
// let ridho = Mahasiswa(`ACHMAD RIDHO FA'IZ`, 10);
// let faiz = Mahasiswa(`Ridho Fa'iz`, 20);

// 3. Constructor Function (keyword new)
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function(porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, Selamat makan!`);
  }
  this.main = function(jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, Selamat bermain!`);
  }
}
let ridho = new Mahasiswa(`ACHMAD RIDHO FA'IZ`, 10);
let faiz = new Mahasiswa(`Ridho Fa'iz`, 20);

// 4. Object.create()