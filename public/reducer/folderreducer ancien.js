function folder (state = [], action) {
    //console.log("state :",state);
    //console.log("action :",action);

    if (action.type == 'addfolder') {
        var folders = state.slice(0);
        //modification de la création du folde id
        //var tempsEnMs = Date.now();
        //action.folder._id = tempsEnMs;
        console.log("folder avant : ",folders);
        folders.push(action.folder);
        console.log("folder après : ",folders);
        return folders;
    } if (action.type == 'updatefolder') {
        var folders = state.slice(0);
        for (var i=0; i<state.length; i++ ) {
            if (state[i].id == action.folder._id) {
                folders[i] = action.folder;
            }
        }
        return folders;
    } if (action.type == 'deletefolder') {
        var folders = state.slice(0);
        for (var i=0; i<folders.length; i++ ) {
            if (folders[i].id == action.folderSelected) {
                console.log("folder delete : ",folders);
                folders.splice(i, 1);
                break;
            }
        }
    console.log("folder fin : ",folders);
        //this.state.folder.splice(action.folderSelected, 1);
        return folders;
    } else {
        return state;
    }
}

module.exports = folder;
