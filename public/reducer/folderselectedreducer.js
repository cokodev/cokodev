function folderSelected(state = "", action) {
    if (action.type == 'selectedfolder') {
        console.log('action folerSelected reducer:', action);
        return action.folderSelected;
    } else {
        return state;
    }
}

module.exports = folderSelected;
