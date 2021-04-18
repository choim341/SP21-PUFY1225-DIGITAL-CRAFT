const xPos = 100;
const yPos = 100;
let diam = 20;

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
    background('BLACK');  
    fill('WHITE');
    var step = 20;
    for (var x = 200; x < 400; x = x + step) {
      for (var y = 200; y < 400; y = y + step) {
        rect(x, y, 55, 55, 20);
      }
    }
    stroke(251, 251, 251);
    strokeWeight(1);
    fill('BLACK');
    var step = 20;
    for (var x = 0; x < 200; x = x + step) {
      for (var y = 0; y < 200; y = y + step) {
        rect(x, y, 55, 55, 20);
      }
    }
}