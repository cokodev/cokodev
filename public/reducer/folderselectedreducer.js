function folderSelected(state = "", action) {
    if (action.type == 'selectedfolder') {

        return action.folderSelected;
    } else {
        return state;
    }
}

module.exports = folderSelected;