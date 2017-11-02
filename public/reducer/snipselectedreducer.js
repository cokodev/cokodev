function snippetSelected(state = "", action) {
    if (action.type == 'selectedsnippet') {
        console.log('action snippetselected reducer:', action);
        return action.snippetSelected;
    } else {
        return state;
    }
}

module.exports = snippetSelected;
