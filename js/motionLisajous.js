window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;

	var centerX = width / 2,
			centerY = height / 2,
			xRadius = 200,
			yRadius = 100,
			xAngle = 0,
			yAngle = 0,
			xSpeed = .02,
			ySpeed = .09,
			x, y;

		render();

		function render() {
			// context.clearRect(0, 0, width, height);
			x = centerX + Math.cos(xAngle) * xRadius;
			y = centerY + Math.sin(yAngle) * yRadius;
			context.beginPath();
			context.arc(x, y, 10, 0, Math.PI * 2, false);
			context.fill();

			xAngle += xSpeed;
			yAngle += ySpeed;

			requestAnimationFrame(render);

		}

};
