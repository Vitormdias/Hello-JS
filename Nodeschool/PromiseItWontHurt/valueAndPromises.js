'use strict'

Promise.resolve('MANHATTAN')
    .then(attachTitle)
    .then(console.log);

function attachTitle(name) {
    return 'DR. '+ name;
}
