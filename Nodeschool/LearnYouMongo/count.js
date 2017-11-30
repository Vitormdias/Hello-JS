'use strict';

const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';

const param = process.argv[2];

mongo.connect(url, function(err, db) {
  if(err)
    throw err;

  const collection = db.collection('parrots');

  collection.count({
      age: {
        $gt: +param
      }
  }, function (err,count) {
        console.log(count);
        db.close();
  });

});
