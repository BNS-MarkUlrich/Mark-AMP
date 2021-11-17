const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


context.beginPath();
context.lineWidth = "2";
context.fillStyle = "#ff0000";
context.moveTo(300,100);
context.lineTo(700,200);
context.lineTo(600,400);
context.lineTo(200,300);
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.lineWidth = "2";
context.fillStyle = "#808080";
context.moveTo(200,300);
context.lineTo(600,400);
context.lineTo(600,600);
context.lineTo(200,500);
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.lineWidth = "2";
context.fillStyle = "#808080";
context.moveTo(700,200);
context.lineTo(800,300);
context.lineTo(600,400);
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.lineWidth = "2";
context.fillStyle = "#808080";
context.moveTo(800,300);
context.lineTo(800,500);
context.lineTo(600,600);
context.lineTo(600,400);
context.closePath();
context.stroke();
context.fill();


/* context.beginPath();
context.lineWidth = "10";
//context.strokeStyle = "#ffcc00";
context.strokeStyle = "rgb(255,255,0)";
context.fillStyle = "rgba(255,255,0,0.4)";
context.moveTo(100,100);
context.lineTo(300,300);
context.lineTo(400,100);
context.lineTo(300,0);
context.closePath(); //Connects lines to complete figure
context.stroke();
context.fill(); //Fills figure with default black style */