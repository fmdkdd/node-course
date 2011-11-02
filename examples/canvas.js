window.addEventListener('load', function() {
	var canvas = document.querySelector('#canvas');
	var ctxt = canvas.getContext('2d');
	ctxt.fillStyle = 'hsl(40, 30%, 90%)';
	ctxt.fillRect(0, 0, 300, 300);

	for (var i=0; i < 100; ++i) {
		ctxt.save();
		ctxt.translate(Math.random()*250,
							Math.random()*250);
		ctxt.fillStyle = 'hsla(' +
			Math.random()*360 +
			', 50%, 50%, 0.8)';
		ctxt.beginPath();
		ctxt.arc(24, 24,
					12 + 12*Math.sin(i),
					Math.PI*2, false);
		ctxt.fill();
		ctxt.restore();
	}
});
