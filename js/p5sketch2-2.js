let width = 100;
let height = 100;

function setup() {
  createCanvas(800, 600);
  noLoop();
  strokeWeight(0);
  stroke('RED');
}

function draw() {
    background('WHITE'); 
  
    //square
    var step = 80;
    for (var x = 0; x < 800; x = x + step) {
      for (var y = 0; y < 600; y = y + step) {
        rect(x, y, width-40, height-40,);
        fill(241, 0, 0, x);
      }
    }
    //circle
    var step = 80;
    for (var x = 0; x < 800; x = x + step) {
    for (var y = 0; y < 600; y = y + step) {
    ellipse(x, y, 10, 10);
    fill(241, 0, 0, x);
      }      
    }  
    //square inside
    var step = 80;
    for (var x = 0; x < 800; x = x + step) {
    for (var y = 0; y < 600; y = y + step) {
    rect(x, y, width-50, height-50,);
    fill(247, 95, 95, x);
      }
    }
    //square left
    var step = 80;
    for (var y = 0; y < 600; y = y + step) {
    fill(252, 175, 175, 100);
    rect(0, y, width-40, height-40,);
    }
    //square top
    fill('WHITE');
    rect(0, 0, width, height-30)
}