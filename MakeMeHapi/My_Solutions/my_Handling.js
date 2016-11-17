var Hapi = require('hapi');
var Inert = require('inert');
var Path = require('path');

var givenPort = process.argv[2];

var server = new Hapi.Server();

server.register(Inert, function (err) {
    if (err)
        throw err;
});

server.connection({
    host: 'localhost',
    port: Number(givenPort || 8080)
});

server.route({
    method: 'GET',
    path: '/',
    handler: {
        file: Path.join(__dirname,'index.html')
    }
});

server.start(function () {});
