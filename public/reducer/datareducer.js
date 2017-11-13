function data(state = {usersFoldersShared:[]}, action) {
    /********************************************************************
     Data
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
        var nState= Object.assign({}, state);
        nState.usersFoldersShared = usersFoldersShared;
        console.log("usersFoldersShared", usersFoldersShared);
        return nState;
    }

    /********************************************************************
     Like Snippet
     *********************************************************************/
    if (action.type == 'countLike') {
        var nState= Object.assign({}, state);
        for (var i=0; i<state.usersFoldersShared.length; i++ ) {
            for (var j=0; j<state.usersFoldersShared[i].folders.length; j++ ) {
                if (action.folderSelected == state.usersFoldersShared[i].folders[j]._id) {
                    for (var k = 0; k < state.usersFoldersShared[i].folders[j].snippets.length; k++) {
                        if (action.snippetSelected == state.usersFoldersShared[i].folders[j].snippets[k]._id) {
                            action.countLike[i].folders[j].snippets[k].snippetLike++;
                            nState.usersFoldersShared[i].folders[j].snippets[k].snippetLike = action.countLike[i].folders[j].snippets[k].snippetLike;
                            console.log("nState", nState.usersFoldersShared[i].folders[j].snippets[k].snippetLike);
                            break;
                        }
                    }
                    break;
                }
            }
        }
        return nState;
    }
    return state;
}

module.exports = data;