server.on('join', function(user) { join(user); });
server.on('message', function(msg) { broadcast(msg) });
server.on('leave', function(user) { leave(user); });
