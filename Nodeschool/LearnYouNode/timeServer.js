var net = require('net')
var server = net.createServer(function (socket) {
    var strftime = require('strftime');
    socket.end(strftime('%F %R\n', new Date()));
})
server.listen(process.argv[2]);
