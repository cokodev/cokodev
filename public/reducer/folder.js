function folder (state = [], action) {

    if (action.type == 'addfolder') {
        var folders = state.slice(0);
        folders.push(action.folder);
        return folders;
    }

    else {
        return state;
    }
}

module.exports = folder;
