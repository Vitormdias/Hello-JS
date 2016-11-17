var Hapi = require('hapi');
var Path = require('path');
var Vision = require('vision');

var givenPort = process.argv[2];

var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(givenPort || 8080)
});

server.register(Vision, function (err) {
    if (err)
        throw err;
});

server.views({
    path: Path.join(__dirname,'templates'),
    engines: {
        html: require('handlebars')
    },
    helpersPath:  Path.join(__dirname, 'helpers')
});

server.route({
    method: 'GET',
    path: '/',
    handler: {
        view: 'index2.html'
    }
});

server.start((err) => {
    if (err)
        throw err;
});
