const initialState = 10000

const reducer = (state = initialState, action) => {
    if (action.type === 'buy') {
        return state - action.payload
    } else if (action.type === 'sell') {
        return state + action.payload
    } else {
        return state;
    }
}

export default reducer