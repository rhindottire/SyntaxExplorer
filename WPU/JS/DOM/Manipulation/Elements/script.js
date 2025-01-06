// const judul = document.getElementById("judul");
// judul.innerHTML = "ACHMAD RIDHO FA'IZ";
// const sectionA = document.querySelector("#a");
// sectionA.innerHTML = "<div><p>Hello World</p></div>";


// const judul = document.getElementById("judul");
// judul.style.color = "red";
// judul.style.backgroundColor = "black";

// const judul = getElementByTagName("h1")[0];
// judul.setAttribute("name", "DODO");

// const a = document.querySelector("section#a a");
// a.setAttribute("id", "link");
// console.log(a.getAttribute("id"))
// console.log(a.getAttribute("href"))
// console.log(a.removeAttribute("href"))

const p2 = document.querySelector(".p2");

p2.classList.add("tertulis");
p2.classList.remove("p2");
p2.classList.toggle("p2");
console.log(p2.classList);
p2.classList.toggle("tertulis");
console.log(p2.classList);
p2.classList.item(1);
conole.log(p2.classList.contains("tertulis"));
console.log(p2.classList.contains("p2"));
p2.classList.replace("tertulis", "p2");