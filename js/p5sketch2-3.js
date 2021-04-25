let width = 50;
let height = 50;
let rectX = 0;
let fr = 60; //starting FPS
let clr;

function setup() {
  createCanvas (800, 600);
  frameRate(fr);
  strokeWeight(0);
}

//moving rectangle
//credit: https://p5js.org/reference/#/p5/frameRate
function draw() {
  clr = color(255, 0, 0);
  background (251, 251, 251, 30);
  rectX = rectX += 1;
  fill(clr);
  rect(rectX, 100, width, height);
  rect(rectX, 300, width, height);  
  rect(rectX, 500, width, height);
  
//background  
  fill(251, 251, 251, 0);
  stroke(clr);
  strokeWeight(2)
    var step = 80;
    for (var x = 0; x < 800; x = x + step) {
      for (var y = 20; y < 600; y = y + step) {
        rect(x, y, width, height);
      }
    }
  
//background2  
  fill(clr);
  stroke(clr);
  strokeWeight(2)
    var step = 160;
    for (var x = 0; x < 800; x = x + step) {
      for (var y = 20; y < 600; y = y + step) {
        rect(x, y, width, height);
      }
    }
}
