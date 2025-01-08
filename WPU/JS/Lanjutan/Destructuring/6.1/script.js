// Destructring Variable / Assignment

// Destructring Array
const greetings = ['Halo', 'Nama', 'Saya', 'Ridho'];
// skipping items
const [a, , , d] = greetings;
console.log(a, d); // Halo, Ridho

// swap items
let x = 1;
let y = 2;
console.log(x, y); // 1, 2
[x, y] = [y, x];
console.log(x, y); // 2, 1

// return value pada function
function coba() {
  return [1, 2];
}
const [p, q] = coba();
console.log(p, q); // 1, 2

// Rest Parameter
const [u, i, ...z] = [1, 2, 3, 4, 5];
console.log(u, i, z); // 1, 2, [3, 4, 5]

// Destructring Object
const mhs = {
  nama: 'Ridho',
  umur: 20,
  email: 'Ridho@.com'
};
const {nama, umur, email} = mhs;
console.log(nama, umur, email);

// Assignment without declaration Object
({nama, umur} = {nama : 'DODO', umur : 20});
console.log(nama, umur);

// Assign to new variable
const mhs1 = {
  nama: 'Ridho',
  umur: 20,
  email: 'Ridho@.com'
};
const {nama: N, umur: U, email: E} = mhs1;
console.log(N, U, E);

// Default Value
const mhs2 = {
  nama: 'Ridho',
  umur: 20,
  email: 'Ridho@.com'
};
const {nama: N2 = 'Ridho', umur: U2 = 20, email: E2 = 'Ridho@.com'} = mhs2;
console.log(N2, U2, E2);

// Default Value + Assignment to new variable
const mhs3 = {
  nama: 'Ridho',
  umur: 20,
  email: 'Ridho@.com'
};
const {nama: N3 = 'Ridho', umur: U3 = 20, email: E3 = 'Ridho@.com'} = mhs3;
console.log(N3, U3, E3);

// Rest Parameter
const mhs4 = {
  nama: 'Ridho',
  umur: 20,
  email: 'Ridho@.com'
};
const {nama: N4, umur: U4, email: E4, ...S4} = mhs4;
console.log(N4, U4, E4, S4);

// get field pada object, setelah dikirim sebagai parameter untuk function
const mhs5 = {
  id: 1,
  nama: 'Ridho',
  umur: 20,
  email: 'Ridho@.com'
};
function getMhs({id, nama, umur, email}) {
  console.log(id, nama, umur, email);
}
getMhs(mhs5); // 1, Ridho, 20, Ridho@.com