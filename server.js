const http = require('http');
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
  console.log('req url:', req.url);
  
  if (req.method === 'POST' && req.url === '/webhook') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      console.log(body);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
