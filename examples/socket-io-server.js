var app = require('express').createServer();
var io = require('socket.io').listen(app);

io.sockets.on('connection', function(socket) {
	socket.on('message', function(msg) {
		socket.broadcast.emit('message', {
			from: socket.id,
			msg: msg
		});
	});
});

app.listen(8080);

serve('/', '/socket-io-client.html');
serve('/client.js', '/socket-io-client.js');

function serve(path, file) {
	app.get(path, function(req, res) {
		res.sendfile(__dirname + (file || path));
	});
}
