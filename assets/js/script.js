const canvas=document.querySelector("canvas");
const ctx= canvas.getContext("2d");
(function drawCircle(){
ctx.fullStyle ="green";
ctx.beginPath();
ctx.arc(200, 125, 100,0 , Math.PI, true);
ctx.fill();
})();

(function draw(){
  ctx.beginPath();
  ctx.moveTo(200,400);
  ctx.lineTo(300,125);
  ctx.lineTo(100,125);
  // ctx.lineTo(200,40);
  ctx.fillStyle = "#D08536";
  ctx.fill();
  ctx.closePath();
})();
