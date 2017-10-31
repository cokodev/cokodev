var combineReducers = require("redux").combineReducers;
var formReducer = require('redux-form').reducer;
var folderSelected   = require('../../reducer/folderselectedreducer');
var snippet   = require('../../reducer/snippetreducer');
var snippetSelected   = require('../../reducer/snipselectedreducer');

var usersdata = require("../../reducer/usersdatareducer");
var globalReducers = combineReducers({  form: formReducer, folderSelected, snippet, snippetSelected, usersdata });
module.exports = globalReducers;
