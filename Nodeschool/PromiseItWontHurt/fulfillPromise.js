'use strict'

const promise = new Promise(function(fulfill, reject) {

    setTimeout(() => {
        fulfill(console.log('FULFILLED!'));
    } , 300);
});

promise.then();

//Other Solution

/* const promise = new Promise(function(fulfill, reject) {

    setTimeout(() => {
        fulfill('FULFILLED!');
    } , 300);
});

promise.then(console.log); */
