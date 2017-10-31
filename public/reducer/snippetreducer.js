function snippet(state = [], action) {
    if (action.type == 'addsnippet') {
        var snippets = state.slice(0);
        var tempsEnMs = Date.now();
        action.snippet.id = tempsEnMs;
        action.snippet.contentSnippet = "";
        snippets.push(action.snippet);
        console.log(snippets);
        return snippets;
    } if (action.type == 'contentSnippet') {
        for (var i=0; i<state.length; i++ ) {
            if (action.idsnippet == state[i].id) {
                state[i].contentSnippet = action.contentSnippet;
                break;
            }
        }
        return state.slice(0);
    } else {
        return state;
    }
}

module.exports = snippet;