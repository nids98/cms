import * as TEMPLATE from '../../dataStore/fixedTemplate'

export const types = {
    GET_TEMPLATE: "GET_TEMPLATE"
}

const initialState = {
    template: []
}

export default (state=initialState, action) => {
    const {type, payload} = action

    switch(type) {
        case types.GET_TEMPLATE: return {
            ...state,
            template: TEMPLATE.section
        }
        default: return state
    }
}

export const getTemplate =  () => ({type: types.GET_TEMPLATE})