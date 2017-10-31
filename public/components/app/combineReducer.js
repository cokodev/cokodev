var combineReducers = require("redux").combineReducers;
var formReducer = require('redux-form').reducer;
var usersdata = require("../../reducer/usersdatareducer");
var globalReducers = combineReducers({  form: formReducer, usersdata });
module.exports = globalReducers;
