window.onload = function() {
    circle1 = new Circle({
      canvasId: 'canvas',
      radius: 50,
      centerX: canvas.width * 0.5,
      centerY: canvas.height * 0.5,
      color: '#ccc'
    });

    circle2 = new Circle({
      canvasId: 'canvas',
      radius: 20,
      centerX: canvas.width - 20,
      centerY: canvas.height - 20,
      color: '#000'
    });

}


/**
 * Draws a circle on canvas
 * @param {String} canvasId
 * @param {Number} radius
 * @param {Number} centerX
 * @param {Number} centerY
 * @param {String} color - hex color value
*/

function Circle({canvasId, radius, centerX, centerY, color}) {
  var canvas = document.getElementById(canvasId);
  var context = canvas.getContext("2d");
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
  context.fillStyle = color;
  context.fill();
}
