// Rest Parameter

function myFunc(a, b, ...myArgs) {
  console.log(`a = ${a}, b = ${b}, c = ${myArgs}`);
}
myFunc(1, 2, 3, 4, 5);

function myObj() {
  // return Array.from(arguments);
  return [...arguments];
}
myObj(1, 2, 3, 4, 5);


function jumlahkanAngka(...angka) {
  return angka.reduce((acc, val) => acc + val);
}
console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// array destructuring
const kelompok1 = ['A', 'B', 'C', 'D', 'E'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(ketua, wakil, anggota);

// object destructuring
const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
const { a, b, ...rest } = obj;
console.log(a, b, rest);


// filtering
function filterBy(type, ...values) {
  return values.filter(value => typeof value === type);
}
// first parameter is the type [string, number, boolean]
console.log(filterBy('number', 1, 2, 'sandhika', false, 10, true, 'ridho'));