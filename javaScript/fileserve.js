const http = require('http')     //importing server module
const fs = require('fs');        //importing fs module
const { log } = require('console');
const fileContent = fs.readFileSync('z-index.html')

const server = http.createServer((req,res) =>{
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(fileContent)
})
server.listen(5500, '127.0.0.1', ()=>{
    console.log("Listening on port 5500")
})
