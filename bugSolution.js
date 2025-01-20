const http = require('http');
const fs = require('fs'); // Import the fs module for file handling

const requestListener = (request, response) => {
  if (request.url === '/error') {
    try {
      // Simulate an error by trying to read a non-existent file
      const data = fs.readFileSync('nonexistentfile.txt');
      response.writeHead(200);
      response.end(data);
    } catch (err) {
      console.error('Error:', err); // Log the error to the console
      response.writeHead(500);
      response.end('Internal Server Error');
    }
  } else {
    response.writeHead(200);
    response.end('Hello, World!');
  }
};

const server = http.createServer(requestListener);

// Handle server errors gracefully
server.on('error', err => {
  console.error('Server error:', err);
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});