var http = require('http');
var url = require('url');

server = http.createServer(function(request, response) {
  var parsedUrl = url.parse(request.url, true),
      pathname = parsedUrl.pathname,
      strtime = parsedUrl.query.iso,
      result;
  if (pathname === '/api/unixtime') {
    result = getUnixTimestamp(strtime);
  }
  else if (pathname === '/api/parsetime') {
    result = getTimeObj(strtime);
  }
  if (result) {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(result));
  }
  else {
    response.writeHead(404);
    response.end();
  }
});
server.listen(Number(process.argv[2]));

function getUnixTimestamp(strtime) {
  return {
    unixtime: getTimestamp(strtime)
  };
}

function getTimestamp(strtime) {
  return Date.parse(strtime);
}

function getTimeObj(strtime) {
  var date = new Date(getTimestamp(strtime));

  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}
