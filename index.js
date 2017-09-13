var http = require('http');
var fs = require('fs');
var requestCounter = 0;
var server = http.createServer(function (request, response) {
    requestCounter++;
    response.writeHead(200, {"Content-Type": "text/plain"});
    fs.readFile('package.json', 'utf8', function (err, data) {
        var reqCountString = "---" + requestCounter + "\n---";
        if (err) {
            response.end(reqCountString + data);
            return console.log(err);
        }
        response.end("Hello World\n" + reqCountString + data);
        console.log(data);
    });
});

server.listen(8000, '127.0.0.1');

console.log("Server listens on 127.0.0.1:8000");
