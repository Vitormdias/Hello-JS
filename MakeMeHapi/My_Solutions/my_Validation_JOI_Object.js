var Hapi = require('hapi');
var Joi = require('joi');


var server = new Hapi.Server();

var givenPort = process.argv[2];

function myHandler(res,reply) {

    reply('login successful')
}

server.connection({
    host: 'localhost',
    port: Number(givenPort || 8080)
});

server.route({
    method: 'POST',
    path: '/login',
    config: {
        handler: myHandler,
        validate: {
            payload: Joi.object({
                isGuest: Joi.boolean(),
                username: Joi.string().when('isGuest', { is: false, then: Joi.required() }),
                accessToken: Joi.string().alphanum(),
                password: Joi.string().alphanum()
            })
            .options({allowUnknown: true})
            .without('password', 'accessToken')
        }
    }
});

server.start(function () {});
