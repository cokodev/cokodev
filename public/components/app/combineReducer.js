var combineReducers = require("redux").combineReducers;
var formReducer = require('redux-form').reducer;
var folder   = require('../../reducer/folderreducer');
var folderSelected   = require('../../reducer/folderselectedreducer');
var snippet   = require('../../reducer/snippetreducer');
var usersdata = require("../../reducer/usersdatareducer");
var globalReducers = combineReducers({  form: formReducer, folder, folderSelected, snippet, usersdata });
module.exports = globalReducers;

