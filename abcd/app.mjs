import { createServer } from 'node:http';
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});
server.listen(80, '0.0.0.0', () => {
  console.log('0.0.0.0:80');
});
