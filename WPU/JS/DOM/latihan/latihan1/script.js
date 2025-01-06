const ubahWarna = document.getElementById("ubahWarna");
ubahWarna.addEventListener("click", () => {
  // document.body.style.backgroundColor = "blue";
  // document.body.style.color = "white";

  // document.body.setAttribute("class", "blue");

  document.body.classList.toggle("blue");
});

const acakWarna = document.createElement("button");
const textAcakWarna = document.createTextNode("Acak Warna");
// acakWarna.textContent = "Acak Warna";
acakWarna.appendChild(textAcakWarna);
acakWarna.setAttribute("type", "button");
ubahWarna.after(acakWarna);

acakWarna.addEventListener("click", () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

const sliders = document.querySelectorAll("input[name=sMerah], input[name=sHijau], input[name=sBiru]");
const updateBackgroundColor = () => {
  const r = document.querySelector("input[name=sMerah]").value;
  const g = document.querySelector("input[name=sHijau]").value;
  const b = document.querySelector("input[name=sBiru]").value;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};
sliders.forEach(slider => slider.addEventListener("input", updateBackgroundColor));

document.body.addEventListener("mousemove", function(event) {
  // posisi mouse
  // console.log(event.clientX, event.clientY);
  // ukuran browser
  // console.log(window.innerWidth, window.innerHeight);
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  // console.log(xPos);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  // console.log(yPos);
  document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 0)`;
});

// change menyimpah perubahan
// input secara real time
// sMerah.addEventListener("input", () => {
//   // alert("ok");
//   sMerah.value;
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// });
// sHijau.addEventListener("input", () => {
//   // alert("ok");
//   sHijau.value;
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// });
// sBiru.addEventListener("input", () => {
//   // alert("ok");
//   sBiru.value;
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// });