function usersdata(state = {}, action) {

    /********************************************************************
    Lecture User Data
    *********************************************************************/
    if (action.type == 'login') {
        return action.userdata;
    }

    /********************************************************************
    Méthode ajout folder
    *********************************************************************/
    if (action.type == 'addfolder') {
       var nState =  jQuery.extend(true, {}, state);
        //var folders = state.folder.slice(0);
        nState.folders.push(action.folder);
        console.log("folders avant :", nState);
        return nState;
    }

    /********************************************************************
    Méthode Delete
    *********************************************************************/
    if (action.type == 'deletefolder') {
        var nState =  jQuery.extend(true, {}, state);
        console.log("action : ", action);
        console.log("nState",nState);

        for (var i=0; i<nState.folders.length; i++ ) {
            if (nState.folders[i]._id == action.folderSelected) {
            console.log(nState.folders[i]._id+"=="+ action.folderSelected);
                nState.folders.splice(i, 1);
                break;
            }
        }
        return nState;
    }
    /********************************************************************
    Méthode Update
    ********************************************************************/
    if (action.type == 'updatefolder') {
        console.log("démarrage de l'action du reduceur :", action);
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
     Méthode ajout snippet
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
     Méthode ajout snippetContent
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
    return state;
}

module.exports = usersdata;
