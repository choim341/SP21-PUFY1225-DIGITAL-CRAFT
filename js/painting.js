function setup(){
	createCanvas(600, 500);
}

function draw(){
	background(226, 213, 198);
	noStroke();
	//yellow
	fill(213, 178, 62);
	rect(10, 20, 60, 60);
	//pink
	fill(201, 133, 145);
	rect(30, 90, 80, 70);
	//yellow
	fill(213, 178, 62);
	rect(15, 180, 75, 70);
	//blue
	fill(129, 164, 184);
	rect(40, 260, 75, 60);
	//pink
	fill(201, 133, 145);
	rect(30, 335, 70, 60);
	//yellow
	fill(213, 178, 62);
	rect(40, 500, 60, 10);
	//second column
	//pink
	fill(201, 133, 145);
	rect(130, 10, 80, 60);
	//blue
	fill(129, 164, 184);
	rect(135, 85, 65, 60);
	triangle(width/2, 100, 320, 100, 310, 80);
}

