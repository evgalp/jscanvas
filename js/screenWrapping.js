window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		p = particle.create(width / 2, height / 2, 3, Math.random() * 5);


  update();

  	function update() {
  		context.clearRect(0, 0, width, height);

			p.update();

			context.beginPath();
			context.arc(p.position.getX(), p.position.getY(), 20, Math.PI * 2, false);
			context.fill();

			if(p.position.getX() > width) {
				p.position.setX(0);
			}
			if(p.position.getX() < 0) {
				p.position.setX(width);
			}
			if(p.position.getY() > height) {
				p.position.setY(0);
			}
			if(p.position.getY() < 0) {
				p.position.setY(height);
			}

  		requestAnimationFrame(update);
  	}

};
