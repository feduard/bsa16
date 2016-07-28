export function userAdding(newUsers) {
    const action = {
        type: 'USER_ADD',
        users: newUsers
    };
    return action;
}

export function userRemoving(newUsers) {
    const action = {
        type: 'USER_REMOVE',
        users: newUsers
    };
    return action;
}

export function userFiltering(newUsers) {
    const action = {
        type: 'USER_REMOVE',
        users: newUsers
    };
    return action;
}