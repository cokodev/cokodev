var combineReducers = require("redux").combineReducers;
var formReducer = require('redux-form').reducer;
var folder   = require('../../reducer/folderreducer');
var folderSelected   = require('../../reducer/folderselectedreducer');

var globalReducers = combineReducers({  form: formReducer, folder, folderSelected });

module.exports = globalReducers;

