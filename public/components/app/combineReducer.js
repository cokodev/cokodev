var combineReducers = require("redux").combineReducers;
var formReducer = require('redux-form').reducer;
var folder   = require('../../reducer/folderreducer');
var usersdata = require("../../reducer/usersdatareducer");

var globalReducers = combineReducers({  form: formReducer, folder, usersdata });

module.exports = globalReducers;

