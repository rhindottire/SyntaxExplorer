const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// mencari angka >= 3

// filter
const newAngka = angka.filter( a => a >= 3 );
// const newAngka = angka.filter(function (a) {
//   return a >= 3;
// });
console.log(newAngka);

// map
// kalikan semua angka dengan 2
const newAngka2 = angka.map( a => a * 2 );
console.log(angka);
console.log(newAngka2);

// reduce
// jumlahkan seluruh elemen pada array
// nilai awal => (0) + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9 = 26
const newAngka3 = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(newAngka3);

// method chaining
// cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka.filter(a => a > 5) // 8, 9, 9
  .map(a => a * 3) // 24, 27, 27
  .reduce((acc, cur) => acc + cur); // 78
console.log(hasil);

function capeGuaBang(array) {
  let result = 0;
  let i = 0;
  while (true) {
    if (array[i] === undefined) break;
    if (array[i] > 5) { // menggantikan filter
      result = result + (array[i] * 3); // menggantikan map dan reduce
    }
    i++;
  }
  return result;
};
const pleaseTolongSaya = capeGuaBang(angka);
console.log(pleaseTolongSaya); // Output: 78