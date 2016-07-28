const initialState = {
    counter: 1,
    users: []
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'USER_ADD': {
            return Object.assign({}, state, {
                users: action.users,
                counter: state.counter + 1
            })
        }
        case 'USER_REMOVE': {
            return Object.assign({}, state, {
                users: action.users
            })
        }
        case 'USER_FILTER': {
            return Object.assign({}, state, {
                users: action.users
            })
        }
        default: {
            return state;
        }
    }
}

