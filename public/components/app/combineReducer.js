var combineReducers = require("redux").combineReducers;
var formReducer = require('redux-form').reducer;
var snippetSelected   = require('../../reducer/snipselectedreducer');
var usersdata = require("../../reducer/usersdatareducer");
var folderSelected = require("../../reducer/folderSelectedreducer");

var globalReducers = combineReducers({  form: formReducer, folderSelected, snippetSelected, usersdata });
module.exports = globalReducers;
