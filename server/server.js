// require dependencies and database file.
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./mongoUtils');
var Q = require('q');
// connnect to database and server.
mongoose.connect('mongodb://localhost/users');
var app = express();
// use dependencies
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));
app.post('/login', function(req, res, next){
    res.json('hello world');
    var username = req.body.username;
    var password = req.body.password;
    // promisify the users finOne method
    var findOne = Q.nbind(User.findOne, User);
    // check if user exists
    findOne({username: username})
        .then(function(user){
            if(!user){
                next(new Error('user does not exist!'));
            }else{
                return user.comparePaswords(password)
                    .then(function(founduser){
                        if(founduser){
                            var token = jwt.encode(user, 'secret');
                            res.json({token:token});
                        }else{
                            return next(new Error('No User'));
                        }
                    })
            }
        })
});
app.post('/signup', function(req, res){
    res.send('testing signup');
    User.create(req.body, function(err, data){
        // console.log(data);
    });
})
app.get('/userProfile', function(req, res){
    res.send('hello world')
});
app.get('/home', function(req, res){
    res.json('hello world')
});
app.get('/mapView', function(req, res){
    app.json('hello world')
});

// listen for connection
app.listen( process.env.PORT || 8080, function(){
	console.log('Listening on 8080');
});

