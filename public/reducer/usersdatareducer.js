function usersdata(state = {}, action) {
    if (action.type == 'login') {
        return action.userdata;
    } else {
        return state;
    }
}

module.exports = usersdata;