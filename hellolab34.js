//Code to derive query in URL

var http = require('http');
var url = require('url');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;                  //capturing request URL (req.url) query ? string and store into variable q. Example here is for /ocalhost:8080/?year=2023&month=October
    console.log(q);
    var dates = q.year + " " + q.month;                      //Storing the year and month in variable dates for display in the next step
    res.end(dates);                                          // Display the dates variable value on browser. Don't use "" or ''

}).listen(8080);