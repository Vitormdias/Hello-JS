const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/learnyoumongo';

const firstName = process.argv[2] , lastName = process.argv[3];

const doc = {
    firstName: firstName,
    lastName: lastName
}

MongoClient.connect(url , function(err,db) {
    if (err)
        throw err;

    let collection = db.collection('docs');

    collection.insert(doc, function (err , data) {
        if (err)
            throw err;

        console.log(JSON.stringfy(doc));

        db.close();
    })

});
