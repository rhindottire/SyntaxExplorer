// for..of
const mhs = ['ridho', 'dodo', 'edho'];
mhs.forEach((m, i) => {
  console.log(`${m} adalah mahasiswa ke-${i + 1}`);
});
for (const [i, m] of mhs.entries()) {
  console.log(`${m} adalah mahasiswa ke-${i + 1}`);
}

// string
const nama = "Achmad Ridho Fa'iz";
for (let n of nama) {
  console.log(n);
}

// node list
const list = document.querySelectorAll('.nama');
// list.forEach((n) => {
//   console.log(n.textContent);
// });
for(n of list) {
  console.log(n.innerHTML);
}

// arguments
function jumlahkanAngka() {
  // return arguments.reduce((a, b) => a + b); // tidak bisa
  // arguments.forEach(a => total += a); // tidak bisa
  let total = 0;
  for (let a of arguments) {
    total += a;
  }
  return total;
}
console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for .. in
const mhs2 = {
  nama: 'Ridho',
  umur: 20,
  email: 'Ridho@.com'
}
for (let x in mhs2) {
  console.log(x);
}