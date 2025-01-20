const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');
//The above code is a simple Node.js HTTP server.  The issue is that it doesn't handle errors properly.  If there is an error while the server is running, the error won't be handled gracefully, and the server might crash without any clear indication of the problem.

//For example if you try to access a file that doesn't exist, or if there's a network error, the server will simply crash without logging any meaningful error message.  This makes debugging challenging.

