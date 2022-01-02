const defaultState = {
    cash: 0
}

const action = {
    type: 'ADD_CASH',
    payload: 0,
}

export const cashReducer = (state = defaultState, action = action) => {
    switch (action.type) {
        case 'ADD_CASH':
            return {...state, cash: state.cash + action.payload}
        case 'GET_CASH':
            return {...state, cash: state.cash - action.payload};
        default:
            return state;
    }
}