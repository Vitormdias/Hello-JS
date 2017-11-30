var fs = require('fs');
fs.readdir(process.argv[2] , function (error , list) {
    for(var i = 0; i < list.length ; i++)
    {
       var nome = list[i].split('.');
       if(nome[1] == process.argv[3])
        console.log(list[i]);
    }
});
