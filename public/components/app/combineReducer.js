var combineReducers = require("redux").combineReducers;
var formReducer = require('redux-form').reducer;
var folder   = require('../../reducer/folderreducer');

var globalReducers = combineReducers({  form: formReducer, folder });

module.exports = globalReducers;

