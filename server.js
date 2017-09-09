const mongo = require ('mongodb');
const mongoClient = mongo.mongoClient;
const client = require('socket.io').listen(3000).sockets;

//connect to mongo
mongoClient.connect('mongodb://localhost:27017/chat_app_mongo', function(err, db){
    if (err){
        throw err;
    }
    console.log('$Cool~Boys$ connected to MongoDB!!');

    //connect to socket.io
    client.on('connection', function(socket){
        let message = db.collection('messages');

        //send status
        sendStatus = function(status){
            socket.emit('status', status);
        };

        //get messages from mongo collection
        message.find().limit(100).sort({_id : 1}).toArray(function(err,res){
            if(err){
                throw err;
            }

            // emit messages
            socket.emit('output',res);
        });

        //handle user login
        socket.on('authenticate', function(data){
            let username = data.username;
            let password = data.password;

            db.authenticate(username,password,function(err,res){
                if(err){
                    if(res == false){
                        sendStatus('Incorrect username or password.')
                    }else{
                        sendStatus('Please enter your password.')
                    }
                }else if(!err && res == true){
                    sendStatus(`Welcome, ${username}`);
                    socket.emit('login-required', username);
                }
            });
        });

        //handle register
        socket.on('register', function(data){
            let username = data.username;
            let password = data.password;

            db.addUser(username,password)
            console.log(data);
        });

        // handle input events
        socket.on('input', function(data){
            let name = data.name;
            let message = data.message;

            //check for name and mesasges
            if(name == '' || message == ''){
                //send error status
                sendStatus('Please enter a name and message');
            } else {
                // insert message
                chat.insert({name: name, message: message}, function(){
                    client.emit('output', [data]);

                    //send status object
                    sendStatus({
                        message: 'Message sent',
                        clear: true
                    });
                });
            }
        });

        // handle clear
        socket.on('clear', function(data){
            // remove all chats from the collection
            chat.remove({}, function(){
                //emit cleared
                socket.emit('cleared');
            })
        });
    })
})