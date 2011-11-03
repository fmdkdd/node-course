var app = require('express').createServer();

app.listen(1337);

app.get('/potion/:name', function(req, res){
   res.send('potion ' + req.params.name);
});

app.get('/spell/:school/:name', function(req, res){
   res.send(req.params.name + ' - ' +
				req.params.school + ' magic');
});
