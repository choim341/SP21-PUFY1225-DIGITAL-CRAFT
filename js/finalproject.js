let width = 140;
let height = 50;
let rectY = 0;
let clr;
let fr = 100;


function setup() {
//p5.js Sketch as Background credit: https://www.youtube.com/watch?v=OIfEHD3KqCg
  canvas = createCanvas(1500, 1500);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  fill(175);
  frameRate(10);
}



function draw() {
//FACE THE FATE! TEXT REVEAL
 if (mouseIsPressed) {
  fill(0, 0, 0);
  rect (0, 0, 1500, 1500);
 }else{
   clear();
 }

 //RED SCANNER
  frameRate(fr);
  noStroke();
  clr = color(255, 0, 0);
  fill(clr);
  rectY = rectY += 1;
  rect(1230, rectY, width-40, height);
  rectY = rectY += 1;
  rect(124, rectY, width, height); 
}


