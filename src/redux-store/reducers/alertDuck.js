import uuid from 'uuid'
export const types = {
    SET_ALERT: "SET_ALERT",
    REMOVE_ALERT: "REMOVE_ALERT"
};

const initialState = [];

export default function(state=initialState, action) {
    switch (action.type) {
        case types.SET_ALERT:
            return [...state, action.payload];
        case types.REMOVE_ALERT:
            return state.filter(alert => alert.id !== action.payload);
        default: return state
    }
}

export const setAlert = (msg, alertType) => dispatch => {
    const id = uuid.v4();
    dispatch({
        type: types.SET_ALERT,
        payload: {msg , alertType, id}
    });

    setTimeout(() => dispatch({
        type: types.REMOVE_ALERT,
        payload: id
    }), 5000)
};