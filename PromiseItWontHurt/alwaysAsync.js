'use strict'

const p = new Promise(function(resolve, reject) {
    resolve('PROMISE VALUE');
});

p.then(console.log);

console.log('MAIN PROGRAM');
