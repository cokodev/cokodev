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
var mongoose = require("mongoose");
var session = require("express-session");
var request = require('request');
var bodyParser = require('body-parser')
app.use(bodyParser.json());         // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({    // to support URL-encoded bodies
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
* Connexion à mlab - mongoose - models
*********************************************************************/
var options = { server: { socketOptions: {connectTimeoutMS: 30000 } }};
mongoose.connect('mongodb://cokodev:keepcool@ds227035.mlab.com:27035/cokodev',options, function(err) {
    console.log(err);
});


//Les sessions
app.use(session({
        secret: 'a4f8071f-c873-4447-8ee2',
        resave: false,
        saveUninitialized: false,
    })
);

//Déclaration des models
var UserSchema = mongoose.Schema({
    userName: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    folders:[{folderName:String,
                folderDescription: String,
                folderStatus : String,
                snippets: [{snippetName:String,
                            snippetDescription: String,
                            snippetTag: String,
                            snippetContent: String,
                            date : Date,
                            languageType: String
                            }]
                }]
});
var UserModel = mongoose.model('Users', UserSchema);













/********************************************************************
* Index - home app
*********************************************************************/
app.get('/', function (req, res) {

    if (req.session.isLog) {
        res.redirect('/dashboard')
    }
    res.render('index');
});



/********************************************************************
* LOGIN
*********************************************************************/
//Get login
app.get('/login', function (req, res) {
    res.render('index');
});

//Post login
app.post('/login', function (req, res) {
    console.log(req.body.login.indexOf("@"));
    if (req.body.login.indexOf("@") > -1) {
        UserModel.findOne({ email: req.body.login, password: req.body.password }, function (err, UserSchema) {
            if (UserSchema) {
                req.session.isLog = true;
                req.session.tokenId = UserSchema.id;
                console.log("connexion par email");
            }
            else {
                console.log("Not registered yet by email");
            }

            isLoged(req.session.isLog, res);
        });
    }
    else {
        UserModel.findOne({ userName: req.body.login, password: req.body.password }, function (err, UserSchema) {
            if (UserSchema) {
                req.session.isLog = true;
                req.session.tokenId = UserSchema.id;
                console.log("connexion par username");
            }
            else {
                console.log("Not registered yet by username");
            }
            isLoged(req.session.isLog, res);
        });

    }

});

function isLoged(isLog, res) {
    if (isLog) {
        res.send("logged");
    }
    else {
        var error = "Incorrect login or password";
        res.send({ error: error });
    }
}

/********************************************************************
* REGISTER
*********************************************************************/
//Get register
app.get('/register', function (req, res) {
    res.render('index');
});

//Post register
app.post("/register", function(req, res) {
  var user = new UserModel({
    userName: req.body.userName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    folders: [
      {
        folderName: "default",
        snippets: [{ snippetName: "default" }]
      }
    ]
  });

  if (
    req.body.userName &&
    req.body.firstName &&
    req.body.lastName &&
    req.body.email &&
    req.body.password
  ) {

    //Faire une condition pour checker le mot de passe à confirmer
    user.save(function(error, user) {
      req.session.tokenId = user.id;
      console.log("userid: " + user.id);
      req.session.isLog = true;
      console.log("user", user);
      res.send("signed");
    });
  } else {
    console.log("not BDD error");
    res.send("Not registered");
  }
  //res.render('index');
  //res.send('you sign');
});






/********************************************************************
* DASHBOARD
*********************************************************************/
app.get("/dashboard", function (req, res) {
    res.render('index');
});


/********************************************************************
* FORGET PASSAWORD
*********************************************************************/
app.get("/forgotpassword", function (req, res) {
    res.render('index');
});


/********************************************************************
* LOGOUT
*********************************************************************/
app.get("/logout", function (req, res) {
    res.render('index');
});




/********************************************************************
* PAGE DES TESTS
*********************************************************************/
app.get('/test', function (req, res) {
    res.render('index');
});



/*********************************************************************************************************
* SERVER LOCAL: http://localhost:9999 ou http://127.0.0.1
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


