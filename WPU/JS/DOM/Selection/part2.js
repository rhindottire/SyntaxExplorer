// DOM Selection
// document.getElementById();
// document.getElementsByTagName();
// document.getElementsByClassName();

// document.querySelector(); -> 1 element
const p4 = document.querySelector("#b p");
// console.log(p4);
p4.style.color = "red";
p4.style.fontSize = "30px";

const li2 = document.querySelector("#b ul li:nth-child(2)");
console.log(li2);
li2.style.backgroundColor = "yellow";

// document.querySelectorAll(); -> NodeList(4)
const p = document.querySelectorAll("p");
console.log(p);
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "blue";
  p[i].style.color = "white";
}



// const li2 = document.querySelectorAll("#container section#b ul li:nth-child(2)");
// console.log(li2);
// if (li2.length > 0) {
//   li2[0].style.backgroundColor = "yellow";
// }