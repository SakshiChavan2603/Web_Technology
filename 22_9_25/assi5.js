// Import the built-in 'http' module
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Write a response
    res.end('Hello from Node.js server using the http module!');
});

// Define a port to listen on
const PORT = 8080;

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
