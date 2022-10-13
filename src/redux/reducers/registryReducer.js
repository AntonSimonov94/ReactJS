import {
    registryLoading,
    registryError,
    registrySuccess,
    loginLoading,
    loginSuccess,
    loginError,
    logoutLoading, logoutSuccess, logoutError
} from "../actionTypes";
import * as types from "../actions";
import {auth} from "../../service/firebase";


const initialState = {
    loading: false,
    error: null,
    currentUser: null
}

export const registryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTRY_LOADING:
            return {
                ...state,
                loading: true
            }
        case types.REGISTRY_SUCCESS:
            return {
                ...state,
                carrentUser: action.payload
            }
        case types.REGISTRY_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export const registryInitiate = (displayName, email, password) => {
    return (dispatch) => {
        dispatch(registryLoading())
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({user}) => {
                user.updateProfile({displayName
                })
                dispatch(registrySuccess(user))
            })
            .catch((e) => dispatch(registryError(e.toString())))
    }
}

export const loginInitiate = ( email, password) => {
    return (dispatch) => {
        dispatch(loginLoading())
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({user}) =>{
                dispatch(loginSuccess(user))
            })
            .catch((e) => dispatch(loginError(e)))
    }
}

export const logoutInitiate = () => {
    return (dispatch) => {
        dispatch(logoutLoading())
        auth
            .signOut()
            .then(() => dispatch(logoutSuccess()))
            .catch((e) => dispatch(logoutError(e)))
    }
}