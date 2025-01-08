// Templates Literal or Template String
const nama = "Achmad Ridho Fa'iz";
const umur = 20;
// console.log(`Halo, My name is ${nama}. saya berumur ${umur} tahun`);

// Embedded Expression
// console.log(`${1 + 1}`);
console.log(`${alert('halo!')}`);

const x = 10;
console.log(`${(x % 2 === 0 ? "genap" : "ganjil")}`);

// HTML fragments
const mhs = {
  nama: "Ridho",
  umur: 17,
  nim : 230411100197,
  email: "achmadaliridho46@gmail.com",
};

const el = `<div class="mhs">
  <h2>${mhs.nama}<h2/>
  <span class="nim">${mhs.nim}</span>
</div>`;
console.log(el);