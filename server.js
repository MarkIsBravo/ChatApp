const Mongo = require ('mongodb');
const MongoClient = Mongo.MongoClient;
const client = require('socket.io').listen(3000).sockets;

//connect to mongo
MongoClient.connect('mongodb://localhost:27017/chat_app_mongo', function(err, db){
    if (err){
        throw err;
    }
    console.log('$Cool~Boys$ connected to MongoDB!!')
})