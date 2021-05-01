
function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  
  background(300);
  fill(50, 50, 50);
  for (let i = 0; i < width; i += 20) {
  for (let y = 0; y < height; y += 20) {
    ellipse(i, y, 10, 10);
  }
}
  fill(61, 241, 251);
  for (let a = 0; a < width; a += 40) {
  for (let b = 0; b < height; b += 20) {
  ellipse(a, b, 10, 10);
}
}
}