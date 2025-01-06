// Event Handling
// const Close = document.querySelectorAll(".close");
// const card = document.querySelectorAll(".card");

// Close.addEvenetListener("click", () => {
//   card.style.display = "none";
// });


// DOM Traversal
const Close = document.querySelectorAll(".close");
// const card = document.querySelectorAll(".card");
// for (let i = 0; i < Close.length; i++) {
//   Close[i].addEventListener("click", (e) => {
//     // card[i].style.display = "none";
//     // Close[i].parentElement.style.display = "none";
//     // console.log(e.target);
//     e.target.parentElement.style.display = "none";
//   });
// }

Close.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.target.parentElement.style.display = "none";
  });
});

const nama = document.querySelector(".nama");
console.log(nama); // <span class="nama">ACHMAD RIDHO FA'IZ</span>
console.log(nama.parentElement); // <div class="card">
console.log(nama.parentNode); // <div class="card">
console.log(nama.parentElement.parentElement); // <div class="container">
console.log(nama.nextSibling); // membaca enter (node)
console.log(nama.nextElementSibling); // <span class="telp">08123456789</span>
console.log(nama.previousElementSibling); // <img src="img/dodo.jpeg" alt="#" width="96" height="96">
console.log(nama.previousElementSibling.previousElementSibling); // NULL
console.log(nama.nextElementSibling.nextElementSibling); // <span class="close">×</span>