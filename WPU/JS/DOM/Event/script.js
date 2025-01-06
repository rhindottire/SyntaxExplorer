const p3 = document.querySelector(".p3");
function events () {
  p3.style.backgroundColor = "red";
  p3.style.color = "white";
}
function eventsp2 () {
  p2.style.backgroundColor = "blue";
  p2.style.color = "white";
}
const p2 = document.querySelector(".p2");
p2.onclick = eventsp2;

const p4 = document.querySelector("section#b p");
p4.addEventListener("click", () => {
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  let item = ul.children.length + 1;
  liBaru.textContent = `item ${item}`;
  ul.appendChild(liBaru);
});