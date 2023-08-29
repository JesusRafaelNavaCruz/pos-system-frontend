import { userConstants } from "../Constants/userConstants";
const initialState = {
    user: null,
    error: null,
    loading: false
};

export default function usersReducer(state = initialState, { type, payload } = {}) {
    switch(type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: payload,
            };
        case userConstants.LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                user: payload,
            };        
        default:
            return state;
    }
}