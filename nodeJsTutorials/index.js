const server = require('http');

server.createServer(engine).listen(2000);

function engine(request, response){
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.end('Hey there! :D');
}