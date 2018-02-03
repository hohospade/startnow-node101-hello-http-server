// write your code here

var http = require("http");

http.createServer(function (req, res) {

    res.writeHead(200, { "content-type": "text/html" });
    res.write('Hello World');
    res.end();
}).listen(8080);




// 1. create local host
// 2. create a server object that can send headers and send a body response.
// 3. add a listener
// 4. list text "Hello World"