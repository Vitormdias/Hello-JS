const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/learnyoumongo';

const inputAge = parseInt(process.argv[2]);

mongo.connect(url , function (err,db) {
    if(err)
        throw err;
    let parrots = db.collection('parrots')
        .find({
            age: {
                $gt: inputAge
            }
        }).toArray(function (err , documents) {
            if(err)
                throw err;
            console.log(documents);
            db.close();
        });
});
