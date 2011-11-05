window.addEventListener('load', function() {
	var canvas = document.getElementById('canvas');
	var ctxt = canvas.getContext('2d');

	ctxt.fillStyle = 'hsl(40, 30%, 90%)';
	ctxt.fillRect(0, 0, 400, 150);

	ctxt.fillStyle = 'red';
	ctxt.fillRect(25, 25, 100, 100);

	ctxt.strokeStyle = 'green';
	ctxt.strokeRect(150, 25, 100, 100);

	ctxt.strokeStyle = 'blue';
	ctxt.beginPath();
	ctxt.moveTo(275, 25);
	ctxt.lineTo(325, 25);
	ctxt.lineTo(325, 125);
	ctxt.lineTo(375, 125);
	ctxt.stroke();
});
