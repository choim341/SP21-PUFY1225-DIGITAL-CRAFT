let xPos = 200;
let yPos = 150;
let ySpeed = 5;
let xSpeed = 30;
let xwidth = 20;
let yheight = 30;

function setup() {
  createCanvas(600, 600);
  noStroke();
  frameRate(5);
}

function draw() {
  //raindrops 
  background(240);
  fill(100, 100, 200);
for (let i = 30; i < width; i += 30) {
  for (let y = 30; y < height; y += 30) {
    ellipse(i, y, 10, 30);
    fill(random(0, 100), random(0, 100), random(255, 255), 40);
    }
  }

  //cloud
  xPos += xSpeed; 
  fill(251, 251, 251);
  ellipse(xPos, yPos, 100, 100);
  ellipse(xPos+60, yPos-50, 100, 100);  
  ellipse(xPos+60, yPos-20, 200, 100);
  ellipse(xPos+100, yPos+20, 100, 100);
  fill(216, 213, 241);  
  
  //cloud eyes && mouth
  ellipse(xPos+60, yPos, 30, 20);
  ellipse(xPos+30, yPos-30, xwidth, yheight);
  ellipse(xPos+90, yPos-30, xwidth, yheight);
    if (xPos >= width || xPos <= 0) {
    xSpeed *= -1;
    xwidth = 30;
    yheight = 5; 
  }
}