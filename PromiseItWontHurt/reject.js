'use strict'

const p = new Promise(function(fulfill, reject) {
    setTimeout(() => {
        reject(new Error('REJECTED!'));
    } , 300)
});

function onReject (error) {
    console.log(error.message);
}

p.then(null , onReject);
