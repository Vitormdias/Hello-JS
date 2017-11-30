'use strict';

const mongo = require("mongodb").MongoClient;
const url = `mongodb://localhost:27017/learnyoumongo`;

const size = process.argv[2];

mongo.connect(url, (err, db) => {
  if (err)
    throw err;

  const collection = db.collection('prices');

  let match = { $match: { size: size } };

  let group = { $group: {
    _id: 'average',
    average: {
      $avg: '$price'
    }
  }};

  collection.aggregate([match, group])
    .toArray((err, results) => {
      if (err)
        throw err;

      console.log(parseFloat(results[0].average).toFixed(2));

      db.close();
    });
});
