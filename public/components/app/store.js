var React = require("react");
var createStore = require("redux").createStore;

var globalReducers = require("./combineReducer");
const store = createStore(globalReducers, ({ form: {}, usersdata: usercurrentdata, snippet: [{snippetName : "titleExample", snippetDescription: "descriptionExample", snippetTag: "snippetTagExample", languageType: "languageTypeExample", id: "12", contentSnippet:"test"}],
    snippetSelected : "12"}));

module.exports = store;
