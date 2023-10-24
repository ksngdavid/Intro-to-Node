//Code to derive query in URL

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('index.html', function(err, data){          // Read a file called index.html from the same folder and save the the contents in data
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);                                    // Write the index.html content which is stored in data into the new webpage
        console.log("...Incoming Request: " + req.url);     // Logging incoming request to the web server at port 8080 after listening
        res.end();                                          // Display the new webpage
    })

}).listen(8080);

console.log("Web server listening on Port 8080...")