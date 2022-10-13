import {errorsNews, loadingNews} from "../actionTypes";
import * as types from "../actions";

const initialState = {
    news: [],
    loading: false,
    error: null
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_POSTS_LOADING:
            return {
                ...state,
                loading: true
            }
        case types.GET_POSTS:
            return {
                ...state,
                news: action.payload,
                loading: false
            }
        case types.GET_POSTS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        default:
            return state
    }
}

export const getData = () => {
    return async (dispatch) => {
        dispatch(loadingNews())
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json()
            dispatch({
                type: types.GET_POSTS,
                payload: data
            })
        } catch (error) {
            dispatch(errorsNews(error.toString()))
        }
    }
}