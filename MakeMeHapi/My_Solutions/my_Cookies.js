var Hapi = require('hapi');
var Boom = require('boom');

var server = new Hapi.Server();

var givenPort = process.argv[2];

function set_cookie_handler(req,reply) {

    return reply({
        message : 'success'
    }).state('session', { key : 'makemehapi' });
}

function check_cookie_handler(req,reply) {

    var session = req.state.session;
    var result;

    if (session) {
        result = { user : 'hapi' };
    } else {
        result = Boom.unauthorized('Missing authentication');
    }

    reply(result);
}

server.connection({
    host: 'localhost',
    port: Number(givenPort || 8080)
});

server.state('session', {
    path: '/',
    encoding: 'base64json',
    ttl: 10,
    domain: 'localhost',
    // isSameSite: false,
    isSecure: false,
    isHttpOnly: false
});

server.route({
    method: 'GET',
    path: '/set-cookie',
    handler: set_cookie_handler,
    config: {
        state: {
            parse: true,
            failAction: 'log'
        }
    }
});

server.route({
    method: 'GET',
    path: '/check-cookie',
    handler: check_cookie_handler
});

server.start((err) => {
    if (err) throw err;
});
