import { actionTypes } from "./actionTypes";

const initialState = {
    response: [],
    request: true
};

export const ResponseReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RESPONSE:
            return {
                ...state,
                response: action.payload
            };
        case actionTypes.OK_MODAL:
            return {
                ...state,
                response: state.response.map((item) => {
                    if (item.id === action.payload.id)
                        return action.payload
                    else
                        return item
                })
            };
        case actionTypes.SEARCH_FILTER:
            return {
                ...state,
                response: state.response.filter((item) => {

                    return item.title.toLowerCase().includes(action.payload)
                })
            };
        case actionTypes.REQUEST:
            return {
                ...state,
                request: !state.request
            };


        default:
            return state;
    }
};
