//Code to derive query in URL

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('index.html', function(err, data){          // Read a file called index.html from the same folder and save the the contents in data
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);                                    // Write the index.html content which is stored in data into the new webpage
        res.end();                                          // Display the new webpage
    })

}).listen(8080);