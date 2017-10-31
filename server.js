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

    user.save(function(error, user) {
        req.session.tokenId = user.id;
        req.session.isLog = true;
        res.send("registred");
    });
    } else {
        console.log("not BDD error");
        res.send("Not registered");
    }
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
        UserModel.findOne({ email: req.body.login, password: req.body.password }, function (err, User) {
            if (User) {
                req.session.isLog = true;
                req.session.tokenId = User.id;
                console.log("connexion par email");
            }
            else {
                console.log("Not registered yet by email");
            }
            isLoged(req.session.isLog, res, User);
        });
    }
    else {
        UserModel.findOne({ userName: req.body.login, password: req.body.password }, function (err, User) {
            if (User) {
                req.session.isLog = true;
                req.session.tokenId = User.id;
                console.log("connexion par username");
            }
            else {
                console.log("Not registered yet by username");
            }
            isLoged(req.session.isLog, res, User);
        });
    }
});

function isLoged(isLog, res, User) {
    if (isLog) {
        res.send(User);
    }
    else {
        var error = "Incorrect login or password";
        res.send({ error: true });
    }
}

/********************************************************************
* DASHBOARD
*********************************************************************/
app.get("/dashboard", function (req, res) {
    if (!req.session.isLog) {
        res.redirect('/')
    }

    UserModel.findOne({ _id: req.session.tokenId }, function (err, currentuser) {
        res.render("index", { currentuser: currentuser });
    });
});

app.get("/dashboard9999", function (req, res) {

    if (!req.session.isLog) {
        res.redirect('/')
    }

    UserModel.findOne({ _id: req.session.tokenId }, function (err, currentuser) {
        res.render("index", { currentuser: currentuser });
    });
});

/********************************************************************
* ADD FOLDER
*********************************************************************/
//Get addfolder
app.get('/addfolder', function (req, res) {
    res.render('index');
});

//Post login
app.post('/addfolder', function (req, res) {
    var myId = mongoose.Types.ObjectId();
    var folder ={
                    _id: myId,
                    folderName:req.body.folderName,
                    folderDescription: req.body.folderDescription,
                    folderStatus: req.body.folderStatus,
                    snippets: []
                }
                     //req.session.tokenIdFolder = folder.myId;
        //if (req.session.isLog) {}
                       console.log("folder "+JSON.stringify(folder));
                       UserModel.update(
                           {_id:req.session.tokenId},
                           {$push: {folders:  folder}}, function (err, folderAdded) {

                             console.log(" folder recorded : ", myId);
                             res.send(folder);
                               });
                               /*} else {
                                   console.log("error folder not recorded");
                               }*/
});
/********************************************************************
* DELETE FOLDER
*********************************************************************/
//Post login
app.post('/deletefolder', function (req, res) {
    console.log("tokenId user : ",req.session.tokenId);

UserModel.update({_id:req.session.tokenId},{$pull: {'folders': {_id:req.body.selectedFolder}}}, function (err, folderDelete) {
                     console.log("folder deleted :", folderDelete);
                        console.log("tokenId folder : ",req.body.selectedFolder);
                     res.send(folderDelete);
     });
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
app.get("/logout", function(req, res) {
  req.session.destroy();
  res.redirect("/");
});



/*********************************************************************************************************
* SERVER LOCAL: http://localhost:9999 ou http://127.0.0.1
**********************************************************************************************************/
var port = (process.env.PORT || 9999);
app.listen(port, function () {
    console.log("Server listening on port 9999");
});

/********************************************************************
* WebpackHotMiddleware
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
