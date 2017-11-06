var mongo = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, function (err, db) {

    var collection = db.collection('parrots');
    collection.find().toArray(function (err, birds) {
        // console.log(birds[0].age);

        console.log(birds.map(function (bird) {
            if (bird.age > parseInt(process.argv[2])) {

                return bird;
            }

        }))
        db.close();
    }

    )
})