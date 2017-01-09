function Score () {
	this.current = 0;
	this.best = 0;

	this.show = function () {
		fill(0, 150);
		textSize(50);
		text(this.current, 1, frame_height - 40);
		text(this.best, 1, frame_height - 2 );
	}

	this.update = function () {
		if (this.best < this.current) {
			this.best = this.current;
		}
	}

	this.up = function () {
		this.current += 1;
	}
}
