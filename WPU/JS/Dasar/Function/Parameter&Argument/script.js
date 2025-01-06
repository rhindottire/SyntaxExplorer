function tambah(a, b) { // parameter
  return a + b;
}
function kali(a, b) {
  return a * b;
}

// parseInt = konversi string menjadi integer
// var a = parseInt(prompt("Masukkan angka pertama : "));
// var b = parseInt(prompt("Masukkan angka kedua : "));
// var hasil = tambah(a*2, b*2); // argument

var hasil = kali(tambah(1, 2), tambah(3, 4));
console.log(hasil);