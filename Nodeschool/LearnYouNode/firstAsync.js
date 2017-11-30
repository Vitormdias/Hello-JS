function countNewLine(erro , content) {
  var lines = content.split('\n').length - 1;
  console.log(lines);
}
var fs = require('fs');
fs.readFile(process.argv[2] , 'utf-8' ,countNewLine);
