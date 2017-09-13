var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    fs.readFile('package.json', 'utf8', function (err, data) {
        if (err) {
            response.end(data);
            return console.log(err);
        }
        response.end("Hello World\n" + data);
        console.log(data);
    });
});

server.listen(8000, '127.0.0.1');

console.log("Server listens on 127.0.0.1:8000");
