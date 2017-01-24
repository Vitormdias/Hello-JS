'use strict'

function all(arg1 , arg2) {
    return new Promise(function(resolve, reject) {
        let counter = 0;
        let out = [];

        arg1.then(function (val) {
            out[0] = val;
            counter++;

            if (counter >= 2) {
                resolve(out);
            }
        });

        arg2.then(function (val) {
            out[1] = val;
            counter++;

            if (counter >= 2) {
                resolve(out);
            }
        });

    });
}

all(getPromise1(), getPromise2())
  .then(console.log);
