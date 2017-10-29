function snippetSelected(state = "", action) {
    if (action.type == 'selectedsnippet') {
        return action.snippetSelected;
    } else {
        return state;
    }
}

module.exports = snippetSelected;