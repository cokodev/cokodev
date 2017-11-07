function usersdata(state = {}, action) {

    /********************************************************************
    Lecture User Data
    *********************************************************************/
    if (action.type == 'login') {
        console.log("action dans le reducer login ",action);
        return action.userdata;
    }

    /********************************************************************
    Add Folder
    *********************************************************************/
    if (action.type == 'addfolder') {
       var nState =  jQuery.extend(true, {}, state);
        nState.folders.push(action.folder);
        //console.log("folders avant :", nState);
        return nState;
    }

    /********************************************************************
   Delete Folder
    *********************************************************************/
    if (action.type == 'deletefolder') {
        var nState =  jQuery.extend(true, {}, state);
        //console.log("action : ", action);
        //console.log("nState",nState);
        for (var i=0; i<nState.folders.length; i++ ) {
            if (nState.folders[i]._id == action.folderSelected) {
            //console.log(nState.folders[i]._id+"=="+ action.folderSelected);
                nState.folders.splice(i, 1);
                break;
            }
        }
        return nState;
    }

    /********************************************************************
    Update Folder
    ********************************************************************/
    if (action.type == 'updatefolder') {
        var nState =  jQuery.extend(true, {}, state);
        for (var i=0; i<nState.folders.length; i++ ) {
            if (nState.folders[i]._id == action.folder.id ) {
                nState.folders[i].folderName = action.folder.folderName;
                nState.folders[i].folderDescription = action.folder.folderDescription
                nState.folders[i].folderStatus = action.folder.folderStatus;
                break;
            }
        }
        return nState;
    }

    /********************************************************************
     Add Snippet
     *********************************************************************/
    if (action.type == 'addsnippet') {
        var nState =  jQuery.extend(true, {}, state);
        for (var i=0; i<nState.folders.length; i++ ) {
            if (action.selectedFolder.selectedFolder == nState.folders[i]._id) {
                nState.folders[i].snippets.push(action.snippet);
                break;
            }
        }
        return nState;
    }

    /********************************************************************
     Update SnippetContent
     *********************************************************************/
    if (action.type == 'updatesnippetContent') {
        var nState =  jQuery.extend(true, {}, state);
        for (var i=0; i<state.folders.length; i++ ) {
            for (var j=0; j<state.folders[i].snippets.length; j++ ) {
                if (action.idsnippet == state.folders[i].snippets[j]._id) {
                    nState.folders[i].snippets[j].snippetContent = action.snippetContent;
                break;
                }
            }
        }
        console.log("nState", nState);
        return nState;
    }

    /********************************************************************
   Delete Snippet
    *********************************************************************/
    if (action.type == 'deletesnippet') {
        var nState =  jQuery.extend(true, {}, state);
          for (var i=0; i<nState.folders.length; i++ ) {
                 if (nState.folders[i]._id == action.folderSelected) {
                      for (var j=0; j<nState.folders[i].snippets.length; j++ ) {
                           if (state.folders[i].snippets[j]._id == action.snippetSelected) {
                                   nState.folders[i].snippets.splice(j, 1);
                                       break;
                           }
                    }
                           break;
          }
    }
        return nState;
    }

    /********************************************************************
     Update Snippet
     *********************************************************************/
    if (action.type == 'updatesnippet') {
        var nState =  jQuery.extend(true, {}, state);
        console.log("action update reducer: ", action);
        console.log("nState update reducer",nState);
               for (var i=0; i<state.folders.length; i++ ) {
                    console.log("nState.folders.length",state.folders.length);
                          console.log("state.folders[i]._id",state.folders[i]._id);
                           if (state.folders[i]._id == action.folderSelected) {
                               console.log("action.folderSelected ", action.folderSelected);
                               console.log("nState.folders[i]._id == action.folderSelected",state.folders[i]._id == action.folderSelected);
                               for (var j=0; j<state.folders[i].snippets.length; j++ ) {

                                    if (action.snippetSelected == state.folders[i].snippets[j]._id) {


                                            console.log("nState.folders[i].snippets[j].snippetName :",nState.folders[i].snippets[j].snippetName);
                                            console.log("action.snippetSelected.snippetName :",action.snippet.snippetName);
                                        nState.folders[i].snippets[j].snippetName = action.snippet.snippetName;

                                        nState.folders[i].snippets[j].snippetDescription = action.snippet.snippetDescription;
                                            console.log("action.snippetSelected.snippetDescription :",action.snippet.snippetDescription);
                                        nState.folders[i].snippets[j].snippetTag = action.snippet.snippetTag;
                                        nState.folders[i].snippets[j].languageType = action.snippet.languageType;
                                        break;


                                    /*    if (action.type == 'updatesnippet') {
                                            var nState =  jQuery.extend(true, {}, state);
                                            console.log("action update reducer: ", action);
                                            console.log("nState update reducer",nState);
                                                   for (var i=0; i<nState.folders.length; i++ ) {
                                                        console.log("nState.folders.length",nState.folders.length);
                                                              console.log("state.folders[i]._id",nState.folders[i]._id);
                                                               if (nState.folders[i]._id == action.folderSelected) {
                                                                   console.log("action.folderSelected ", action.folderSelected);
                                                                   console.log("nState.folders[i]._id == action.folderSelected",nState.folders[i]._id == action.folderSelected);
                                                                   for (var j=0; j<nState.folders[i].snippets.length; j++ ) {
                                                                        console.log("nState.folders[i].snippets.length",nState.folders[i].snippets.length);
                                                                        if (action.folders.snippets.id == nState.folders[i].snippets[j]._id) {
                                                                            console.log(nState.folders[i].snippets[j]._id+ "=="+ action.folders.snippets.id);
                                                                                console.log("nState.folders[i].snippets[j]._id == action.snippetSelected",
                                                                                action.folders.snippets.id == nState.folders[i].snippets[j]._id);
                                                                            nState.folders[i].snippets[j].snippetName = action.snippetName;
                                                                            console.log("nState.folders[i].snippets[j].snippetName = action.snippetName ",nState.folders[i].snippets[j].snippetName = action.snippetName);
                                                                            nState.folders[i].snippets[j].snippetDescription = action.snippetDescription;
                                                                            nState.folders[i].snippets[j].snippetTag = action.snippetTag;
                                                                            nState.folders[i].snippets[j].languageType = action.languageType;
                                                                            break;*/
                            }
                     }
                            break;
           }
     }
        //console.log("nState", nState);
        return nState;
    }

    /********************************************************************
     Add Folder
     *********************************************************************/
    if (action.type == 'users') {
        var usersFoldersShared = [];
        for (var i=0; i<action.users.length; i++ ) {
            for (var j=0; j<action.users[i].folders.length; j++ ) {
                if (action.users[i].folders[j].folderStatus === "shared") {
                    usersFoldersShared.push(action.users[i]);
                    break;
                }
            }
        }
        return usersFoldersShared;
    }
    return state;
}

module.exports = usersdata;
