const xPos = 100;
const yPos = 100;
let diam = 20;

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
    background('WHITE');  
    var step = 20;
    for (var y = 0; y < 400; y = y + step) {
        line(0, y, 400, y);
    }
    for (var x = 0; x < 400; x = x + step) {
        line(x, 0, x, 400 )
    }
    //clear circle
    strokeWeight(1);
    fill (0, 0, 0, 0);
    ellipse (xPos-20, yPos+200, diam*10, diam*10);
    ellipse (xPos-15, yPos+200, diam*9, diam*9);
    ellipse (xPos-10, yPos+200, diam*8, diam*8);
    ellipse (xPos-5, yPos+200, diam*7, diam*7);
    ellipse (xPos, yPos+200, diam*6, diam*6);
    ellipse (xPos+5, yPos+200, diam*5, diam*5);
    //black hole
    fill ('BLACK');
    ellipse (xPos+200, yPos, diam*15, diam*15);
    //mini black hole's
    var step = 20;
    for (var y = 0; y < 400; y = y + step) {
        ellipse(xPos+20, y, 10, 10);
    }
}