function data(state = {}, action) {
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
        return usersFoldersShared;
    }
    if (action.type == 'countLike') {
        var nbClicFolder = "";
        for (var i=0; i<state.length; i++ ) {
            console.log("state!!state!!", state );
            if (state[i]._id == state[i]._id) {

            }
        }
        return state;
    }



    return state;
}

module.exports = data;