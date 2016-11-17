var Hapi = require('hapi');
var Auth = require('hapi-auth-basic');

var server = new Hapi.Server();

var givenPort = process.argv[2];
var user = {name: 'hapi' , password: 'auth'}

function my_handler(request , reply) {

    reply('Hello Hapi');
}

function validate(request , username , password , callback) {

    var valid = username == user.name && password == user.password;

    return callback(null , valid , {name: user.name});
}

server.connection({
    host: 'localhost',
    port: Number(givenPort || 8080)
});

server.register(Auth, function(err) {
    if (err)
        throw err;
});

server.auth.strategy('simple', 'basic' , {validateFunc: validate})

server.route({
    method: 'GET',
    path: '/',
    config: {
        auth: 'simple',
        handler: my_handler
    }
})

server.start((err) => {
    if(err)
        throw err;
})
