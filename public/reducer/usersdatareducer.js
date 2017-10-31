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
    else {
        return state;
    }
}

module.exports = usersdata;
