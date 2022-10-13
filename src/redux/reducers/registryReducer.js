import {errorsNews, loadingNews} from "../actionTypes";
import * as types from "../actions";


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
