const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

const newAngka = [];
let index = 0;
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    newAngka[index] = angka[i];
    index++;
  }
}
console.log(newAngka);