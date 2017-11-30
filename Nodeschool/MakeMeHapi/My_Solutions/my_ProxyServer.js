var Hapi = require('hapi');
var H2o2 = require('h2o2');

var server = new Hapi.Server();

var givenPort = process.argv[2];

server.connection({
    host: 'localhost',
    port: Number(givenPort || 8080)
});

server.register(H2o2, function () {});

server.route({
    method: 'GET',
    path: '/proxy',
    handler: {
        proxy: {
            host: '127.0.0.1',
            port: '65535'
        }
    }
});

server.start(function () {});
