'use strict';

const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo';

const age = parseInt(process.argv[2]);

mongo.connect(url , function (err,db) {
    if(err)
        throw err;

    const parrots = db.collection('parrots')
        .find({
            age: {
                $gt: age
            }
        }, {
            age: 1,
            name: 1,
            _id: 0
        }).toArray(function (err , documents) {
            if(err)
                throw err;

            console.log(documents);

            db.close();
        });
});
