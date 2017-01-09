function Snake() {
	this.x = 0;
	this.y = 0;
	this.xspeed = 0;
	this.yspeed = 0;
	this.size = 0;
	this.body = [];

	this.spawn = function() {
		this.x = floor(random(frame_width/pixel_size))*pixel_size;
		this.y = floor(random(frame_height/pixel_size))*pixel_size;

		this.xspeed = random([-1,0,1]);

		if ( this.xspeed == 0 ) {
			this.yspeed = random ([-1, 1]);
		} else {
			this.yspeed = 0;
		}
	}

	this.direction = function(x_dir, y_dir) {
		this.xspeed = x_dir;
		this.yspeed = y_dir;
	}
	this.update = function() {
		if (this.size == this.body.length ) {
			for (var i = 0; i < this.body.length-1; i++) {
				this.body[i] = this.body[i+1];
			}
		}
		this.body[this.size-1] = createVector(this.x,this.y);

		this.x += ( this.xspeed * pixel_size);
		this.y += ( this.yspeed * pixel_size);

		if ( this.x >= frame_width ) {
			this.x = 0
		} else if ( this.x < 0 ) {
			this.x = frame_width - pixel_size;
		}
		if ( this.y >= frame_height ) {
			this.y = 0
		} else if ( this.y < 0 ) {
			this.y = frame_height - pixel_size;
		}

		if ((fruit.x == this.x) && (fruit.y == this.y)) {
			this.size ++;
			score.up();
			fruit.spawn();
		}

		for (var i = 0; i < this.body.length; i++) {
			if ((this.body[i].x == this.x) && (this.body[i].y == this.y)) {
				this.body.length=0;
				this.size=0;
				score.current = 0;
			}
		}

		
	}

	this.show = function() {
		fill(255);
		for (var i = 0; i < this.body.length; i++) {
			rect(this.body[i].x, this.body[i].y, pixel_size, pixel_size);
		}
		rect(this.x, this.y, pixel_size, pixel_size);
	}
}
