var combineReducers = require("redux").combineReducers;
var formReducer = require('redux-form').reducer;
var usersdata = require("../../reducer/usersdatareducer");
var folderSelected = require("../../reducer/folderSelectedreducer");
var globalReducers = combineReducers({  form: formReducer, folderSelected, usersdata });
module.exports = globalReducers;
