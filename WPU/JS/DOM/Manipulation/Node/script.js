// DOM Manipulation
// buat element baru
const pBaru = document.createElement("p");
const textPBaru = document.createTextNode("appendChild");
// simpan text ke pBaru
pBaru.appendChild(textPBaru);
pBaru.style.backgroundColor = "blue";
pBaru.style.color = "white";
// simpan pBaru di akhir section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

const liBaru = document.createElement("li");
const textLiBaru = document.createTextNode("insertBefore");
liBaru.appendChild(textLiBaru);
liBaru.style.backgroundColor = "blue";
liBaru.style.color = "white";
const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");
ul.insertBefore(liBaru, li2)

const p1 = document.querySelector("section#a p");
sectionA.removeChild(p1);

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");
const h2 = document.createElement("h2");
const textH2 = document.createTextNode("replaceChild");
h2.appendChild(textH2);
h2.style.backgroundColor = "blue";
h2.style.color = "white";
sectionB.replaceChild(h2, p4);