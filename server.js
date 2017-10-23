/*********************************************************************************************************
********************************************SERVER COKODEV************************************************
**********************************************************************************************************/
/********************************************************************
* Express access
*********************************************************************/
var express = require('express');
var app = express();

/********************************************************************
* Les librairies
*********************************************************************/
var md5 = require('md5');
var mongoose = require('mongoose');
var request = require('request');
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('public/src'));
app.use(express.static('public/src/css'));
app.use(express.static('public/src/js'));
app.use(express.static('public/src/img'));
app.use(express.static('public/src/fonts'));


/********************************************************************
* Index - home app
*********************************************************************/
app.get('/', function (req, res) {
    res.render('index');
});



/********************************************************************
* Login
*********************************************************************/
app.get('/login', function (req, res) {
    res.render('index');
});

app.post('/login', function (req, res) {
    res.render('index');
});



/********************************************************************
* Rigister
*********************************************************************/
app.get('/register', function (req, res) {
    res.render('index');
});

app.post('/register', function (req, res) {
    res.render('index');
});









/********************************************************************
* Page des tests
*********************************************************************/
app.get('/test', function (req, res) {
    res.render('index');
});



/*********************************************************************************************************
* Server local : http : //localhost:9999 ou http://127.0.0.1
**********************************************************************************************************/
var port = (process.env.PORT || 9999);
app.listen(port, function () {
    console.log("Server listening on port 9999");
});

/********************************************************************
* WebpackHotMiddleware - config specifique mac gaspard
*********************************************************************/
const webpack = require('webpack');
const webpackconfig = require('./webpack.config');
const webpackMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackCompiler = webpack(webpackconfig);
const wpmw = webpackMiddleware(webpackCompiler, {
    watchOptions: {
        poll: true
    },
    publicPath: webpackconfig.output.publicPath
});
app.use(wpmw);
const wphmw = webpackHotMiddleware(webpackCompiler);
app.use(wphmw);
app.use(express.static(__dirname + '/public'));


