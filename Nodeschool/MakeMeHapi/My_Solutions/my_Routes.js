var Hapi = require('hapi');

var givenPort = process.argv[2];

var server = new Hapi.Server();

function name_handler(request, reply) {

    reply('Hello ' + request.params.name);
}

server.connection({
    host: 'localhost',
    port: Number(givenPort || 8080)
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: name_handler
});

server.start(function () {});
