'use strict';

const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
  if(err)
    throw err;
  let collection = db.collection('docs');

  const doc = {
    firstName: process.argv[2],
    lastName: process.argv[3]
  };

  collection.insert(doc, function(err, data) {
    if(err)
      throw err;

    console.log(JSON.stringify(doc));

    db.close();
  });
});
