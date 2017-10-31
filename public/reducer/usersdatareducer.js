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
    Méthode Select folder
    *********************************************************************/
    if (action.type == 'selectedfolder') {
        var nState =  jQuery.extend(true, {}, state);
        return action.userdata.folderSelected;
    }

    /********************************************************************
    Méthode Delete
    *********************************************************************/
    if (action.type == 'deletefolder') {
        var nState =  jQuery.extend(true, {}, state);
        //console.log(nState);
        //var folders = state.slice(0);
        for (var i=0; i<nState.folders.length; i++ ) {
            if (nState.folders[i]._id == action.folderSelected) {
            //console.log(nState.folders[i]._id+"=="+ action.folderSelected);
                nState.splice(i, 1);
                break;
            }
        }
         //console.log("folder fin : ",folders);
        //this.state.folder.splice(action.folderSelected, 1);
        return nState;
    }
    else {
        return state;
    }
}

module.exports = usersdata;
