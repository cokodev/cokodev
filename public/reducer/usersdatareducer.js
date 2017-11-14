function usersdata(state = {}, action) {

    /********************************************************************
    Lecture User Data
    *********************************************************************/
    if (action.type == 'login') {
        console.log("action dans le reducer login ",action);
        return action.userdata;
    }
    /********************************************************************
    Update User
    ********************************************************************/
    if (action.type == 'updateuser') {
        var nState =  jQuery.extend(true, {}, state);

        for (var i=0; i<nState.length; i++ ) {
            console.log("nState.length reducer :",nState.length);
            if (nState[i]._id == action.user.id ) {
        console.log("nState[i]._id == action.user.id reducer :", nState[i]._id == action.user.id);
                nState.userName = action.user.userName;
                nState.lastName = action.user.lastName;
                nState.firstName = action.user.firstName;
                nState.email = action.user.email;
                nState.password = action.user.password;
                break;
            }
        }
        return nState;
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
        for (var i=0; i<state.folders.length; i++ ) {
           if (state.folders[i]._id == action.folderSelected) {
               for (var j=0; j<state.folders[i].snippets.length; j++ ) {
                    if (action.snippetSelected == state.folders[i].snippets[j]._id) {
                        nState.folders[i].snippets[j].snippetName = action.snippet.snippetName;
                        nState.folders[i].snippets[j].snippetDescription = action.snippet.snippetDescription;
                        nState.folders[i].snippets[j].snippetTag = action.snippet.snippetTag;
                        nState.folders[i].snippets[j].languageType = action.snippet.languageType;
                        break;
                    }
               }
               break;
           }
        }
        return nState;
    }
    return state;
}

module.exports = usersdata;
