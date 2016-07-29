// require dependencies and database file.
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./mongoUtils');



// connnect to database and server.
mongoose.connect('mongodb://localhost/users');
var app = express();
// use dependencies
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

app.post('/login', function(req, res){
	app.json('hello world')
});

app.get('/userProfile', function(req, res){
	app.send('hello world')
});

app.get('/home', function(req, res){
	app.json('hello world')
});
// listen for connection
app.listen(8080, function(){
	console.log('Listening on 8080');
});