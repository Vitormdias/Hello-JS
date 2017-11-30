var Hapi = require('hapi');
var Fs = require('fs');
var Rot13 = require("rot13-transform");
var Path = require('path');

var givenPort = process.argv[2];

var server = new Hapi.Server();

function my_hapi_handler(req,reply) {

    readStream = Fs.createReadStream(Path.join(__dirname,'text.txt'));

    encrypText = readStream.pipe(Rot13())

    reply(encrypText);
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
