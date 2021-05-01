function setup() {
  createCanvas(600, 600, SVG); // Create SVG Canvas
  noStroke();
  colorMode(HSB);
  noLoop();
}

function draw() {
  for (let i = 0; i < width; i += 20) {
    for (let j = 0; j < height; j += 20) {
      const rFill = random(0, 360);
      fill(rFill, 100, 100);
      rect(i, j, 10, 10);
    }
  }

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
  //   when you're ready to export the sketch uncomment the save() function and reload the sketch
  save();
  


