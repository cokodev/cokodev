var combineReducers = require("redux").combineReducers;
var formReducer = require('redux-form').reducer;
var snippetSelected   = require('../../reducer/snipselectedreducer');
var data = require("../../reducer/datareducer");
var usersdata = require("../../reducer/usersdatareducer");
var folderSelected = require("../../reducer/folderSelectedreducer");

var globalReducers = combineReducers({  form: formReducer, folderSelected, snippetSelected, usersdata, data });
module.exports = globalReducers;
