import { loginRequest } from "../../api/services";
import { userConstants } from "../Constants/userConstants";
export const loginAction = (credentials) => { 
    return async (dispatch) => {
        try {
            dispatch({
                type: userConstants.LOGIN_REQUEST,
            })
            const userData = await loginRequest(credentials);
            dispatch({
                type: userConstants.LOGIN_SUCCESS,
                payload: userData,
            })
        } catch (error) {
            dispatch({
                type: userConstants.LOGIN_ERROR,
                payload: error.message
            })
        }
    }
} 