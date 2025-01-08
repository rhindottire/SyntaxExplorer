function kerjakanTugas(matakuliah, selesai) { // higher order function
  console.log(`Mulai mengerjakan tugas ${matakuliah}...`);
  selesai();
}
function selesai() { // callback
  alert('Selesai mengerjakan tugas!');
}
kerjakanTugas('Pemrograman Web', selesai);

// contoh higher order function
setTimeout(function () {
  console.log('Hello World!');
}, 1000);
// ==================================================== //
const tombol = document.querySelector('.submit');
tombol.addEventListener('click', function () {
  console.log('Tombol ditekan!');
});
// ==================================================== //
function ucapkanSalam(waktu) { // higher order function
  return function (nama) { // callback (return function)
    console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
  }
}
let selamatPagi = ucapkanSalam('Pagi');
console.dir(selamatPagi('Ridho'));
// ==================================================== //





// program sederhana
let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);

// program complex dengan abstraksi
// mendefinisi fungsi range dan sum
function range(start, end) {
  let array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}
function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}
console.log(sum(range(1, 10)));

// looping sederhana
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// function supaya dinamis
function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

// aksi menjadi lebih efektif
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
repeat(3, console.log);
repeat(2, alert);