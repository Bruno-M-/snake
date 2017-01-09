function Fruit () {
	this.x = 0;
	this.y = 0;

	this.spawn = function () {
		this.x = floor(random(frame_width/pixel_size))*pixel_size;
		this.y = floor(random(frame_height/pixel_size))*pixel_size;
	}

	this.show = function() {
		fill(0, 255, 0);
		rect(this.x, this.y, pixel_size, pixel_size);
	}
}
