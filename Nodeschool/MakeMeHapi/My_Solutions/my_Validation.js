var Hapi = require('hapi');
var Joi = require('joi');

var givenPort = process.argv[2];

var server = new Hapi.Server();

function my_hapi_handler(req,reply) {

    reply('Hello Hapi');
}

server.connection({
    host: 'localhost',
    port: Number(givenPort || 8080)
});

server.route({
    path: '/chickens/{breed}' ,
    method: 'GET' ,
    handler: my_hapi_handler,
    config: {
        validate: {
            params: {
                with: Joi.string().required(),
                breed: Joi.string().required()
            }
        }
    }
});

server.start(function() {
    console.log('Server runnig at: ', server.info.uri);
});
