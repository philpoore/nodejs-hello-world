var http = require('http')

var server = http.createServer(function (req, res){
	console.log(new Date(), 'request');
	res.end('hello world');
});

module.exports = server;