function imprimir(error , data) {
  if (error) {
    console.error(error);
  }
  else {
    for (var i in data) {
      console.log(data[i]);
    }
  }
}
var back = require('./modular2.js');
back(process.argv[2] , process.argv[3] , imprimir);
