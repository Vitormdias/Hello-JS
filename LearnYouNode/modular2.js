var path = require('path');
var fs = require('fs');

module.exports = function (dirName , fileExt , Print) {
  fs.readdir(dirName , function (error , list) {
    if(error)
      Print(error,null);
    else {
      result = [];
      list.forEach (function (file) {
        if (path.extname(file) === '.' + fileExt) {
            result.push(file);
        }
      });
      Print(null,result)
    }
  });
};
