const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json'});
  res.end(JSON.stringify({
    message: 'Hello from devops final project',
    author: 'Nikita',
    version: '1.0.0'
  }));
});


server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
