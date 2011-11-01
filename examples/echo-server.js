var net = require('net');

var server = net.createServer(function (socket) {
	socket.write("Echo server");
	socket.pipe(socket);
}).listen(1337);
