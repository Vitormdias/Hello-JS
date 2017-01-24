'use strict'

function alwaysThrows() {
    throw new Error('OH NOES')
};

function iterate(num) {
    console.log(num);
    return num + 1;
};


Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null, console.log);

//PS: Exercise doesn't pass, because it's impossible to match errors in this situation
