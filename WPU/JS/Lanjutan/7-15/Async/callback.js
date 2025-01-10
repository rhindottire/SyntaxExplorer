// Callback
// Synchronous callback
// function halo(nama) {
//   alert(`Halo ${nama}`);
// }

// function print(callback) {
//   const nama = prompt("Input your name: ")
//   callback(nama);
// }
// print(halo);

// function print2(callback) {
//   const nama = prompt("Input your name: ")
//   callback(nama);
// }
// print2(nama => alert(`Halo ${nama}`));




const mhs = [
  {
    id: 1,
    nama: 'Ridho',
    nim: 230411100197,
    email: 'achmadaliridho46@gmail',
  },
  {
    id: 2,
    nama: 'Edho',
    nim: 230411100198,
    email: 'achmadaliedho46@gmail',
  },
  {
    id: 3,
    nama: 'Dodo',
    nim: 230411100199,
    email: 'achmadalidodo46@gmail',
  }
];

console.log("Start");

// Synchronous
// mhs.forEach(m => {
//   for (let i = 0; i < 1000000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });

// Asynchronous
// function getData(url, success, error) {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       success(xhr.responseText);
//     } else {
//       error();
//     }
//   };
//   xhr.open('GET', url);
//   xhr.send();
// }
// getData('data.json', result => {
//   const mhs = JSON.parse(result);
//   mhs.forEach(m => console.log(m.nama));
// }, () => {

// });

// jQuery
$.ajax({
  url: 'data.json',
  success: (mhs) => {
    mhs.forEach(m => console.log(m.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  }
});
console.log("End");