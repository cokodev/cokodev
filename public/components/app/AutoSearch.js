var React = require("react");
var store = require("./store")
import { dispatch } from "redux";

function SelectFolder(idFolder, idSnippet=null) {
    console.log("id du folder", idFolder);
    store.dispatch({
        type: 'selectedfolder',
        folderSelected: idFolder
    });

    if (idSnippet == null) {
        console.log("id du snippet", idSnippet);
         store.dispatch({
           type: "selectedsnippet",
           snippetSelected: idSnippet
         });
    }
}

module.exports = SelectFolder;

