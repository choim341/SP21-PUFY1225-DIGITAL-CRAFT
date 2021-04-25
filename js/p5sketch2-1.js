let width = 100;
let height = 100;

function setup() {
  createCanvas(800, 600);
  noLoop();
  strokeWeight(1);
}

function draw() {
    background('RED'); 
  
    //photo frame
    fill('WHITE');
    var step = 200;
    for (var x = 0; x < 800; x = x + step) {
      for (var y = 0; y < 600; y = y + step) {
        rect(x, y, width, height,);
      }
    }
    //photo
    fill('BLACK');
    var step = 100;
    for (var x = 7.5; x < 800; x = x + step) {
      for (var y = 10; y < 600; y = y + step) {
        rect(x, y, width-15, height-45,);
      }
    }
    
    //captured
    fill('RED');
    stroke('RED');
    var step = 200;
    for (var x = 7.5; x < 800; x = x + step) {
      for (var y = 10; y < 600; y = y + step) {
        rect(x, y, width-15, height-45,);
      }
    }  
}