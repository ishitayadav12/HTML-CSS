const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';      //local host
const port = 3000;                //random port
const home = fs.readFileSync('./index.html')
const about = fs.readFileSync('./about.html')
const contact = fs.readFileSync('./contact.html')
const services = fs.readFileSync('./services.html')

const server = http.createServer((req,res)=> {
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(home);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});