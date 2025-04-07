// Run: node 06-basic-server.js
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js server!');
});
server.listen(3000, () => console.log('Server running on http://localhost:3000'));
