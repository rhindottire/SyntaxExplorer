const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// Implementasi fungsi map secara manual
function manualMap(array, transform) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(transform(array[i]));
  }
  return result;
}
const manual = manualMap(angka, a => a * 2);
console.log(manual);
// ============================================ //
// ============================================ //
// ============================================ //
function noTransformMap(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * 2);
  }
  return result;
}
const noTranform = noTransformMap(angka);
console.log(noTranform);
// ============================================ //
// ============================================ //
// ============================================ //
function simpleMap(array) {
  const result = new Array(array.length);
  for (let i = 0; i < array.length; i++) {
    result[i] = array[i] * 2;
  }
  return result;
}
const simple = simpleMap(angka);
console.log(simple);