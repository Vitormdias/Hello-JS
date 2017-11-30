var http = require('http');
var map = require('through2-map');

upCase = map(function(chunk) {
  return chunk.toString().toUpperCase();
});

server = http.createServer(function(request, response) {
  if (request.method == 'POST') {
    request.pipe(upCase).pipe(response);
  }
});
server.listen(Number(process.argv[2]));
