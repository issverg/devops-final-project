const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET'
};

// Запускаем сервер
const { createServer } = require('http');
const app = require('./app');

setTimeout(() => {
  const req = http.request(options, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const parsed = JSON.parse(data);
      if (parsed.message === 'Hello from DevOps Final Project!') {
        console.log('✅ Test passed!');
        process.exit(0);
      } else {
        console.log('❌ Test failed!');
        process.exit(1);
      }
    });
  });
  req.end();
}, 1000);
