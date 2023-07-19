import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA '
const SET_IS_AUTH_TRUE = 'SET_AUTH_TRUE '
const LOGOUT_USER = 'LOGOUT_USER '

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case SET_IS_AUTH_TRUE: {
            return {
                ...state,
                isAuth: true,
            }
        }

        case LOGOUT_USER: {
            return {
                ...initialState
            }
        }

        default:
            return state;
    }
};

export const setAuthUserData = ({ userId, email, login }) => ({ type: SET_USER_DATA, payload: { userId, email, login } })
export const setIsAuthTrue = () => ({ type: SET_IS_AUTH_TRUE })
export const logOutUserAC = () => ({ type: LOGOUT_USER })

export const getAuthUserData = () => {
    return (dispatch) => {
        return authAPI.me().then(resp => {
            if (resp.resultCode === 0) {
                const { id, login, email } = resp.data;
                dispatch(setAuthUserData({
                    userId: id,
                    email: email,
                    login: login,
                }));
                dispatch(setIsAuthTrue())
            }
        });
    }
}

export const login = ({ email, password, rememberMe = false }) => {
    return (dispatch) => {
       authAPI.login({ email, password, rememberMe }).then(resp => {
            if (resp.data.resultCode === 0) {
                dispatch(getAuthUserData());
            }
            else {
                const message = resp.data.messages.length > 0 ? resp.data.messages[0] : "Some error"
                dispatch(stopSubmit('login', {_error: message}))
            }
        });
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(resp => {
            if (resp.data.resultCode === 0) {
                dispatch(logOutUserAC())
            }
        });
    }
}

export default authReducer;
