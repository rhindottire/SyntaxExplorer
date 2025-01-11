const canvas = document.querySelector('#canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

// Create a rectangle
ctx.fillStyle = 'red';
ctx.strokeStyle = 'black';
ctx.lineWidth = 5;
ctx.rect(50, 50, 300, 300);
ctx.fill();
ctx.stroke();

// Create a circle / arc
ctx.fillStyle = 'green';
ctx.beginPath();
ctx.arc(550, 200, 150, 0, Math.PI * 2, false);
ctx.fill();
ctx.stroke();

// Create a path
ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.moveTo(900, 50);
ctx.lineTo(1050, 350);
ctx.lineTo(750, 350);
// ctx.lineTo(900, 50);
ctx.closePath();
ctx.fill();
ctx.stroke();