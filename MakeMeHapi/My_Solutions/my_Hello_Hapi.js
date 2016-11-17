var Hapi = require('hapi');

var givenPort = process.argv[2];

var server = new Hapi.Server();

function my_hapi_handler(req,reply) {

    reply('Hello hapi');
}

server.connection({
    host: 'localhost',
    port: Number(givenPort || 8080)
});

server.route({
    path: '/' ,
    method: 'GET' ,
    handler: my_hapi_handler
});

server.start(function() {
    console.log('Server runnig at: ', server.info.uri);
});
