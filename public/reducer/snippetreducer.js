function snippet(state = [], action) {
    if (action.type == 'addsnippet') {
        var snippets = state.slice(0);
        var tempsEnMs = Date.now();
        action.snippet.id = tempsEnMs;
        snippets.push(action.snippet);
        return snippets;
    } else {
        return state;
    }
}

module.exports = snippet;