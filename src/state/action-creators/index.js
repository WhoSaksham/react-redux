export const buy = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'buy',
            payload: amount
        })
    }
}

export const sell = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'sell',
            payload: amount
        })
    }
}