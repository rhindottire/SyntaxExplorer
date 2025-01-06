// DOM Traversal
// const Close = document.querySelectorAll(".close");
// Close.forEach((element) => {
//   element.addEventListener("click", (e) => {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//     e.stopPropagation(); // METHOD EVENT BUBBLING
//   });
// });

// const cards = document.querySelectorAll(".card");
// cards.forEach((card) => {
//   card.addEventListener("click", (e) => {
//     alert("ok");
//   });
// });

const container = document.querySelector(".container");
container.addEventListener("click", (e) => {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});