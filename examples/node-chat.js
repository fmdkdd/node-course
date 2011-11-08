var net = require('net');
var sockets = [];
net.Server(function(socket) {
	sockets.push(socket);
	socket.on('data', function(data) {
		sockets.forEach(function(s) {
			s.write(socket.fd + '> ' + data); }); });
	socket.on('end', function() {
		sockets.splice(sockets.indexOf(socket), 1); });
}).listen(1337);
