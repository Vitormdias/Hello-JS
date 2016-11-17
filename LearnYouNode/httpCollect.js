var http = require('http');
var url = process.argv[2];
var string = '';
var size = 0;
http.get(url ,function (response) {
  response.on('data' , function(data) {
    string += data;
    size += data.length;
  });
  response.on('end' , function() {
    console.log(size);
    console.log(string);
  });
});
