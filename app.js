const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.url === '/') {
    const cpuInfo = os.cpus();
    const osInfo = os.platform()

    const data = {
      cpu: cpuInfo,
      os: osInfo,
    };
    res.end(JSON.stringify(data));
  } else {
    

    const timeDelay = Math.floor(Math.random() * 4000);
    setTimeout(() => {
        if (req.method === 'OPTIONS') {
            return res.end();
          }
        res.end("Hello from server!");
    }, timeDelay);
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
