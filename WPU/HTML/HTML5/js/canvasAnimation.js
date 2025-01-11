const canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

let x = 300;
let y = 200;
let speedX = 3;
let speedY = 3;
let radius = 150;

function draw() {
  window.requestAnimationFrame(draw);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  ctx.fillStyle = "red";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 5;

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.stroke();

  if (x + radius > innerWidth || x - radius < 0) {
    speedX = -speedX; // Balikkan arah horizontal
  }
  if (y + radius > innerHeight || y - radius < 0) {
    speedY = -speedY; // Balikkan arah vertikal
  }
  x += speedX;
  y += speedY;
}
draw();