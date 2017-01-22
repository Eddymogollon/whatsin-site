'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var TxtInput = require('./models/txtinput');
var TechInput = require('./models/techinput');
var MaterialsInput = require('./models/materialsinput');
var router = require('./routes/index');
var app = express();

// mongodb connection
mongoose.connect(`mongodb://localhost:27017/whatsin`);
const db = mongoose.connection;
// mongo error
db.on('error', console.error.bind(console, 'connection error:'));

//Set the view engine to ejs
app.set("view engine", 'ejs');
app.set('views', __dirname + '/views');

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Include routes
app.use('/', router);

// show statics in /public
app.use(express.static(__dirname + '/public'));

app.listen('8080', function() {
    console.log('It\'s listening at port 8080');
});

