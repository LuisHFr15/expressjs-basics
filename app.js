const http = require('http');

// may create a function which handle with the requests to be able to create a server
function handleRequests(request, response) {
    if (request.url === '/currenttime') {
        response.statusCode = 200;
        response.end('<h1>' + new Date().toISOString() + '</h1>')
    }
    else if (request.url === '/') {
        response.statusCode = 200; // success case
        response.end('<h1>Hello World!</h1>');
    }
}

const server = http.createServer(handleRequests);

server.listen(3000); // the port that we'll use for the development
// when deploying into a real server machine, for the web, we would use 80 or 443