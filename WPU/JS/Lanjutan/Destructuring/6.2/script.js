// Destructuring
function kalkulasi(a, b) {
  return [a + b, a - b, a * b, a / b];
}
// const tambah = kalkulasi(10, 20)[0];
// const kali = kalkulasi(10, 20)[1];
// const [tambah, kali] = kalkulasi(10, 20);
const [tambah, , kali] = kalkulasi(10, 20);
console.log(tambah, kali);

// Destructuring Object
function newKalkulasi({ a, b }) {
  return {
    tambah: a + b,
    kurang: a - b,
    kali: a * b,
    bagi: a / b,
  }
}
const {kurang, bagi } = newKalkulasi({ a: 10, b: 20 });
console.log(kurang, bagi);

// Destructuring function argument
const mhs = {
  nama: 'Ridho',
  umur: 20,
  email: 'Ridho@.com',
  nilai : {
    tugas : 80,
    ujian : 85
  }
};
function cetakMhs({nama, umur, nilai: {tugas}}) {
  return `Halo, nama saya ${nama}, umur saya ${umur} tahun. Nilai tugas saya ${tugas}`
}
console.log(cetakMhs(mhs));