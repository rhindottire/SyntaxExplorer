// Function Expression
const tampilPesan = function (nama) {
  alert('Halo ' + nama);
}
console.log(tampilPesan('Edho'));

// Arrow Function

// (1 parameter `nama` tanpa kurung)
// jika isi function hanya return value
// maka bisa dihilangkan kurung kurawalnya
// dan return valuenya bisa langsung di return
const tampilNama = nama => `Halo, ${nama}`; // implicit return
console.log(tampilNama('Edho'));

// contoh tanpa parameter
const tampilPesan1 = () => `Hello World`;
console.log(tampilPesan1());

const tampilPesan2 = (nama, waktu) => {
  return `Selamat ${waktu}, ${nama}`;
}
console.log(tampilPesan2('Edho', 'Pagi'));

let mahasiswa = ['Edho', 'Ridho', 'Dodo'];
// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
let jumlahHuruf = mahasiswa.map(nama => nama.length);
console.log(jumlahHuruf); // return array [4, 5, 4]

let jumlahHuruf1 = mahasiswa.map(nama => (
  { nama: nama, jmlHuruf: nama.length }
));
console.table(jumlahHuruf1); // return array of object