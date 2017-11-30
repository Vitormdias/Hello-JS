'use strict';

const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/' + process.argv[2];

mongo.connect(url, function(err, db) {
  if(err)
    throw err;

  let collection = db.collection('users');

  collection.update({
    username: 'tinatime'
  }, {
    $set: {
      age: 40
    }
  }, function(err) {
    db.close();
  });
});
