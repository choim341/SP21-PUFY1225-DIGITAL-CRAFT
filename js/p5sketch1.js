const xPos = 100;
const yPos = 100;
const width = 100;
const height = 100;

function setup() {
  createCanvas(300, 300);
  noLoop();
  noStroke();
}

function draw() {
    //background
    background(0);  
    fill(300);
    rect(0, 0, 300, 300);
    fill(1, 1, 1);
    //first row
    noStroke();
    rect(0, 0, width-5, height/5);
    rect(xPos, 0, width/5, height);
    rect(xPos, yPos+5, width, height/5);
    rect(xPos+105, yPos+5, width/5, height);
    rect(xPos+130, yPos+5, width-30, height/5);
    rect(xPos+105, yPos+110, width-5, height/5);
    //second row
    fill(217, 217, 217);
    rect(5, 25, width-5, height/5);
    rect(xPos+5, 25, width/5, height);
    rect(xPos+5, yPos+30, width, height/5);
    rect(xPos+110, yPos+30, width/5, height);
    rect(xPos+135, yPos+30, width-35, height/5);
    rect(xPos+110, yPos+135, width-10, height/5);
    //third row
    fill(255, 152, 29);
    rect(10, yPos/2, width-5, height/5);
    rect(xPos+10, yPos/2, width/5, height);
    rect(xPos+10, yPos+55, width, height/5);
    rect(xPos+115, yPos+55, width/5, height);
    rect(xPos+140, yPos+55, width-40, height/5);
    rect(xPos+115, yPos+160, width-15, height/5);
    //fourth row    
    fill(238, 34, 91);
    rect(15, yPos-25, width-5, height/5);
    rect(xPos+15, yPos-25, width/5, height);
    rect(xPos+15, yPos+80, width, height/5);
    rect(xPos+120, yPos+80, width/5, height);
    rect(xPos+145, yPos+80, width-45, height/5);
    rect(xPos+120, yPos+185, width-20, 15);
    //fifth row    
    fill(57, 137, 215);
    rect(20, yPos, width-5, height/5);
    rect(xPos+20, yPos, width/5, height);
    rect(xPos+20, yPos+105, width, height/5);
    rect(xPos+125, yPos+105, width/5, height-5);
    rect(xPos+150, yPos+105, width-50, height/5);
}
