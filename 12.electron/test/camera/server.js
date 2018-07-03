var app = require('http').createServer(function(req, res) {})
var io = require('socket.io')(app);
app.listen(8080);
io.on('connection', function(socket) {
	socket.on('record', function(data) {
		console.log(data);
		io.emit('play', data);
	});
});