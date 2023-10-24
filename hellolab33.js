//Minimum code to run a Node server

var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello World! My name is David!</h1>');

}).listen(8080);