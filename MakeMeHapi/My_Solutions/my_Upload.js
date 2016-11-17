var Hapi = require('hapi');

var server = new Hapi.Server();

var givenPort = process.argv[2];

function myHandler(request,reply) {
    var body = '';
    var payload = payload;

    payload.file.on('data', (data) => {
      body += data;
    });

    payload.file.on('end', () => {
      var result = {
        description: payload.description,
        file: {
          data: body,
          filename: payload.file.hapi.filename,
          headers: payload.file.hapi.headers
        }
      };

      reply(JSON.stringify(result));
    });
}

server.connection({
  port: Number(givenPort || 8080),
  host: 'localhost'
});

server.route({
  method: 'POST',
  path: '/upload',
  config: {
    handler: myHandler,
    payload: {
      output: 'stream',
      parse: true,
      allow: 'multipart/form-data'
    }
  }
});

server.start((err) => {
    if (err) throw err;
});
