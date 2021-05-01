let xPos = 120;
let yPos = 150;
let ySpeed = 30;

function setup() {
  createCanvas(600, 600);
  noStroke();
  frameRate(5);
}

function draw() {
  //hairs 
  background(300);
  fill(50, 50, 50);
  for (let i = 100; i < 500; i += 60) {
  for (let y = 0; y < height; y += 60) {
    rect(i, y, 30, 400);
    }
  }
  fill(3, 3, 3);
  for (let i = 130; i < 500; i += 60) {
  for (let y = 0; y < height; y += 60) {
  rect(i, y, 30, 400);
    }
  }
  for (let i = 100; i < 500; i += 60) {
    for (let y = 300; y < 400; y += 120) {
      rect(i, y, 60, 120)
      fill(random(200, 251));
    }
  }
  
  //brush
  yPos += ySpeed; 
  fill(240, 185, 208);
  rect(xPos, yPos, 350, 50);
  rect(xPos+350, yPos, 40, 170);  
  rect(xPos+105, yPos, 40, 170);
  fill (117, 202, 208);
  rect(xPos+315, yPos+50, 15, 120);
  rect(xPos+285, yPos+50, 15, 120);
  rect(xPos+255, yPos+50, 15, 120);
  rect(xPos+225, yPos+50, 15, 120);
  rect(xPos+195, yPos+50, 15, 120);
  rect(xPos+165, yPos+50, 15, 120);
  fill (0, 0, 0);
  ellipse(xPos+25, yPos+25, 15, 15);
    if (yPos >= 300 || yPos <= 150) {
    ySpeed *= -1;
  }
}