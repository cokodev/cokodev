function folder(state = [], action) {
    if (action.type == 'addfolder') {
        state.push(action.folder);
        var folders = state.slice(0);
        return folders;
    } else {
        return state;
    }
}

module.exports = folder;