// DOM Selection

// getElementById // teknik camelCase
// document.getElementById(); -> element // document = node root
const judul = document.getElementById("judul");
// console.log(judul); // <h1 id="judul">Hello World</h1>
judul.style.color = "red"; // <h1 id="judul" style="color: red;">Hello World</h1>
judul.style.backgroundColor = "black"; // background-color -> error
judul.innerHTML = "ACHMAD RIDHO FA'IZ";

// document.getElementsByTagName(); 
// -> HTMLCollection
const p = document.getElementsByTagName("p");
console.log(p); // HTMLCollection(4) [p.p1, p.p2, p.p3, p]
// o: p.p1
// 1: p.p2
// 2: p.p3
// 3: p
// length: 4

// p.style.backgroundColor = "red"; // error karena p = HTMLCollection (Array)

// p[0].style.backgroundColor = "blue";
// p[1].style.backgroundColor = "green";
// p[2].style.backgroundColor = "yellow";

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "blue";
  p[i].style.color = "white";
}

// const h1 = document.getElementsByTagName("h1");
// console.log(h1); // HTMLCollection()

const h1 = document.getElementsByTagName("h1")[0];
// console.log(h1);
h1.fontSize = "50px";

// document.getElementsByClassName();
// -> HTMLCollection
const p1 = document.getElementsByClassName("p1");
p1[0].style.innerHTML = "Di ubah menggunakan JavaScript";