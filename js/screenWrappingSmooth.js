window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		p = particle.create(width / 2, height / 2, 3, Math.random() * 5, 15);

	p.radius = 30;

  update();

  	function update() {
  		context.clearRect(0, 0, width, height);

			p.update();

			context.beginPath();
			context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
			context.fill();

			if(p.position.getX() - p.radius > width) {
				p.position.setX(0 - p.radius);
			}
			if(p.position.getX() + p.radius < 0) {
				p.position.setX(width + p.radius);
			}
			if(p.position.getY() - p.radius > height) {
				p.position.setY(0 - p.radius);
			}
			if(p.position.getY() + p.radius < 0) {
				p.position.setY(height + p.radius);
			}

  		requestAnimationFrame(update);
  	}

};
