function setup() {
  createCanvas(400, 400);
}

function draw() {
	background(250);  
    stroke(0);
    fill(250);
    rect(0, 0, 400, 400);
    //background
    noStroke();
    fill(244, 243, 232);
    rect(10, 10, 380, 270);
    fill(169, 172, 143)
	rect(10, 10, 310, 270);
    fill(243, 242, 125)
    rect(310, 10, 20, 270);
    fill(227, 122, 86)
    rect(310, 10, 8, 270);
    //greensign
    fill(23, 35, 28)
    triangle(10, 170, 10, 280, 120, 160);
    triangle(120, 160, 10, 280, 130, 280);
    fill(22, 25, 17)
    triangle(120, 160, 130, 280, 140, 280);
    fill(131, 42, 22);
    line(20, 200, 100, 190);
    //yellowsign
    fill(187, 121, 26)
    triangle(150, 130, 140, 280, 310, 280);
    triangle(310, 140, 150, 130, 310, 280);
    fill(195, 172, 120)
    triangle(160, 140, 150, 280, 310, 280);
    triangle(310, 150, 160, 140, 310, 280);
}