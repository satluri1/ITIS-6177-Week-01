const http = require('http');

const requestListener = function (req, res) {
  res.end('Hello World!');
}

const server = http.createServer(requestListener);
server.listen(8080, () => {
    console.log("Node Server Started...");
  });