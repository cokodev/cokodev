function usersdata(state = {}, action) {

    /********************************************************************
    Lecture User Data
    *********************************************************************/
    if (action.type == 'login') {
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
        //console.log("démarrage de l'action du reduceur :", action);
        var nState =  jQuery.extend(true, {}, state);
        for (var i=0; i<nState.folders.length; i++ ) {
            if (nState.folders[i]._id == action.folder.id ) {
        //console.log('condition dans le reducer ',nState.folders[i]._id+"=="+ action.folder.id);
        //console.log("action du reducer :",action.folder._id);
                nState.folders[i].folderName = action.folder.folderName;
                nState.folders[i].folderDescription = action.folder.folderDescription;
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
    if (action.type == 'snippetContent') {
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
        console.log("action delete reducer: ", action);
        console.log("nState delete reducer",nState);
          for (var i=0; i<nState.folders.length; i++ ) {
              console.log("nState.folders.length",nState.folders.length);
                    console.log("state.folders[i]._id",nState.folders[i]._id);
                    console.log("action.folderSelected",action.folderSelected);
                 if (nState.folders[i]._id == action.folderSelected) {


                       console.log("action.folderSelected",action.folderSelected);
                  console.log("state.folders[i]._id == action.folderSelected",nState.folders[i]._id +"=="+ action.folderSelected);
                  console.log("state.folders[i]._id == action.folderSelected",nState.folders[i]._id == action.folderSelected);
                      for (var j=0; j<nState.folders[i].snippets.length; j++ ) {
                        console.log("state.folders[i].snippets[j]._id",state.folders[i].snippets[j]._id);
                         console.log("action.snippetSelected",action.snippetSelected);

                           if (state.folders[i].snippets[j]._id == action.snippetSelected) {
                              console.log("state.folders[i].snippets[j]._id",state.folders[i].snippets[j]._id);
                               console.log("action.snippetSelected",action.snippetSelected);
                                console.log(state.folders[i].snippets[j]._id+ "=="+ action.snippetSelected);
                                    console.log("state.folders[i].snippets[j]._id == action.snippetSelected",state.folders[i].snippets[j]._id == action.snippetSelected);

                                   nState.folders[i].snippets.splice(j, 1);
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
