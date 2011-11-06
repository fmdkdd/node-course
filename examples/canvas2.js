window.addEventListener('load', function() {
	var canvas = document.getElementById('canvas');
	var ctxt = canvas.getContext('2d');

	ctxt.fillStyle = 'hsl(40, 30%, 90%)';
	ctxt.fillRect(0, 0, 150, 400);

	ctxt.fillStyle = 'red';
	ctxt.fillRect(25, 25, 100, 100);

	ctxt.strokeStyle = 'green';
	ctxt.strokeRect(25, 150, 100, 100);

	ctxt.strokeStyle = 'blue';
	ctxt.beginPath();
	ctxt.moveTo(125, 275);
	ctxt.lineTo(125, 325);
	ctxt.lineTo(25, 325);
	ctxt.lineTo(25, 375);
	ctxt.stroke();
});
