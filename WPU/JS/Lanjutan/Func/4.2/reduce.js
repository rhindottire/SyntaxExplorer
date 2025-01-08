const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// Implementasi fungsi reduce secara manual
function manualReduce(array, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
}
const manual = manualReduce(angka, (accumulator, currentValue) => accumulator + currentValue, 0);
console.log(manual);
// ============================================ //
// ============================================ //
// ============================================ //
function noCallbackReduce(array, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    accumulator += array[i];
  }
  return accumulator;
}
const noCallback = noCallbackReduce(angka, 0);
console.log(noCallback);
// ============================================ //
// ============================================ //
// ============================================ //
function simpleReduce(array) {
  let accumulator = 0;
  for (let i = 0; i < array.length; i++) {
    accumulator += array[i];
  }
  return accumulator;
}
const simple = simpleReduce(angka);
console.log(simple);