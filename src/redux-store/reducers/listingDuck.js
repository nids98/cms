import * as CITIES from "../../dataStore/cities"

export const types = {SHOW_LIST: "SHOW_LIST"}

const initialState = {
    cities: CITIES.cities
}

export default (state=initialState, action) => {
    switch(action.type) {
        case types.SHOW_LIST: return state
        default: return state
    }
}

export const actions = {
    showCities: () => ({type: types.SHOW_LIST})
}
