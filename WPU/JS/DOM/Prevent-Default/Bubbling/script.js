// DOM Traversal
const Close = document.querySelectorAll(".close");
Close.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  });
});