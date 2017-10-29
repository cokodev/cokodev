function snippetSelected(state = "", action) {
    if (action.type == 'selectedsnippet') {
        console.log("hellostate", action);
        return action.snippetSelected;
    } else {
        return state;
    }
}

module.exports = snippetSelected;