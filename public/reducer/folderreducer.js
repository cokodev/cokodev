function folder(state = [], action) {
    if (action.type == 'addfolder') {
        var folders = state.slice(0);
        var tempsEnMs = Date.now();
        action.folder.id = tempsEnMs;
        folders.push(action.folder);
        return folders;
    } if (action.type == 'updatefolder') {
        var folders = state.slice(0);
        for (var i=0; i<state.length; i++ ) {
            if (state[i].id == action.folder.id) {
                folders[i] = action.folder;
            }
        }
        return folders;
    } else {
        return state;
    }
}

module.exports = folder;