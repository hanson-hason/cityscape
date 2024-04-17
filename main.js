// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();
// WIDE WINDOWS!!!!!
ctx.fillStyle = "white";
let i = 375;
for (let n = 0; n <= 5; n++) {
  ctx.fillRect(20, i, 110, 25);
  i = i + 45;
}
ctx.fillRect(20, 375, 110, 25);

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

// LONG WINDOWS!!!!!
ctx.fillStyle = "white";
let j = 175;
for (let n = 0; n <= 4; n++) {
  ctx.fillRect(j, 125, 10, 500);
  j = j + 22.5;
}
ctx.fillRect(20, 375, 110, 25);

// Column 1!!!!!
ctx.fillStyle = "white";
let k = 210;
for (let n = 0; n <= 5; n++) {
  ctx.fillRect(45, k, 10, 10);
  k = k + 25;
}
ctx.fillRect(20, 375, 110, 25);

// Column 2!!!!!
ctx.fillStyle = "white";
let l = 210;
for (let n = 0; n <= 5; n++) {
  ctx.fillRect(65, l, 10, 10);
  l = l + 25;
}
ctx.fillRect(20, 375, 110, 25);

// Column 3!!!!!
ctx.fillStyle = "white";
let m = 210;
for (let n = 0; n <= 5; n++) {
  ctx.fillRect(85, m, 10, 10);
  m = m + 25;
}
ctx.fillRect(20, 375, 110, 25);

// Column 4!!!!!
ctx.fillStyle = "white";
let h = 210;
for (let n = 0; n <= 5; n++) {
  ctx.fillRect(105, h, 10, 10);
  h = h + 25;
}
ctx.fillRect(20, 375, 110, 25);

//make vaeriebal
