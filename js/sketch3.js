function setup() {
  createCanvas(400, 400);
}

function draw() {
	background(250);  
    stroke(0);
    fill(27, 28, 51);
    rect(0, 0, 400, 400);
    noStroke();
    //fileshade
    fill(110, 73, 39);
    triangle(265, 80, 265, 242, 400, 400,)
    triangle(400, 220, 265, 80, 400, 400,)
    //basket
    fill(44, 52, 22);
    triangle(120, 260, 120, 400, 280, 400,)
    triangle(280, 240, 120, 260, 280, 400,)
    fill(4, 4, 0);
    triangle(280, 240, 280, 400, 400, 400,)
    triangle(400, 350, 280, 240, 400, 400,)
    //nametag
    fill(201, 175, 138);
    triangle(140, 280, 140, 350, 260, 340,)
    triangle(260, 265, 140, 280, 260, 340,)  
    //file
    fill(220, 169, 107);
    triangle(130, 100, 130, 259, 265, 242,)
    triangle(265, 80, 130, 100, 265, 242,)
}