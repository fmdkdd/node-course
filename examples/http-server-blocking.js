var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	setTimeout(function(){
		res.end('Hello World');
	}, 2000)
}).listen(1337);
