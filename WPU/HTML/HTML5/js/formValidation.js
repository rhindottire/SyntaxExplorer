const slider = document.querySelector("#slider");
const start = document.querySelector(".start");
const end = document.querySelector(".end");

start.innerHTML = slider.min;
end.innerHTML = slider.max;

slider.addEventListener("input", function () {
  start.innerHTML = slider.value;
  end.innerHTML = slider.max;
});

const color = document.querySelector("#color");
const hexa = document.querySelector(".hexa");
hexa.innerHTML = color.value;
color.addEventListener("input", function () {
  hexa.innerHTML = color.value;
  hexa.style.color = color.value;
});