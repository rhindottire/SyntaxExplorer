function satu() {
  var nama = 'Ridho';
  console.log(nama); // Execution 2 => Ridho
}
function dua() {
  // Dodo masuk ke arguments karena function dua() tidak memiliki parameter
  // nama undifinied in local => argument => global scope
  console.log(nama); // Execution 3 => Edho
}
console.log(nama); // Execution 1 => undefined
var nama = 'Edho';
satu();
dua('Dodo');
console.log(nama); // Execution 4 => Edho