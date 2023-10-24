//Code to derive query in URL

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res){
    var q = url.parse(req.url, true);                       // parse out the request URL
    var filename = "." + q.pathname;                        // To get the at the path to get ./<html filename>.html for insertion into fs.readFile                      
    fs.readFile(filename, function(err, data){              // Read a file called index.html from the same folder and save the the contents in data
        if (err) {                                          // Error to capture non-existence html filenames
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);                                    // Write the index.html content which is stored in data into the new webpage
        return res.end();                                          // Display the new webpage
    })

}).listen(8080);

console.log("Web server listening on Port 8080...")