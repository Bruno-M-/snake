var snek;
var fruit;
var score;
var frame_width;
var frame_height;
var pixel_size = 10

function setup() {
	frameRate(20);
	createCanvas(windowWidth,windowHeight);
	frame_width = (floor(windowWidth/pixel_size))*pixel_size;
	frame_height = (floor(windowHeight/pixel_size))*pixel_size;
	snek = new Snake;
	fruit = new Fruit;
	score = new Score;
	snek.spawn();
	fruit.spawn();
}

function draw() {
	background(51);  
	snek.update();
	score.update();
	snek.show();
	fruit.show();
	score.show();
}

function keyPressed() {
	if ((keyCode == UP_ARROW) && (snek.yspeed != 1)) {
		snek.direction(0, -1);
	} else if ((keyCode == DOWN_ARROW) && (snek.yspeed != -1)) {
		snek.direction(0,1);
	} else if ((keyCode == RIGHT_ARROW) && (snek.xspeed != -1 )) {
		snek.direction(1,0);
	} else if ((keyCode == LEFT_ARROW) && (snek.xspeed != 1)) {
		snek.direction(-1,0);
	}
}


