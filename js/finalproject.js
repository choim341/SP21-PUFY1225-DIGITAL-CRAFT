let width = 140;
let height = 50;
let rectX = 0;
let rectY = 0;
let fr = 100; //starting FPS
let clr;


function setup() {
//p5.js Sketch as Background credit: https://www.youtube.com/watch?v=OIfEHD3KqCg
  canvas = createCanvas(1500, 1500);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  fill(175);
  frameRate(10);
//Background music credit: Prelude by The Soul Surfers
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


