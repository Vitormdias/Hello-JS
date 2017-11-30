'use strict'

const invalidJSON = process.argv[2];

function parsePromised (json) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(JSON.parse(json));
    } catch (e) {
      reject(e);
    }
  });
};

parsePromised(invalidJSON)
  .then(null, console.log)

//PS: Exercise doesn't pass, because it's impossible to match errors in this situation
