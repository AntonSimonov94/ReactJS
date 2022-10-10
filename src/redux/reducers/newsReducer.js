import {GET_POSTS, GET_POSTS_ERROR, GET_POSTS_LOADING} from "../actionTypes";


const initialState = {
    news: [],
    loading: false
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_POSTS:
            return {
                ...state,
                news: action.payload,
                loading: false
            }
        case GET_POSTS_ERROR:
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
        dispatch({type: GET_POSTS_LOADING})
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json()
            dispatch({type: GET_POSTS, payload: data})
        }
        catch (error) {
           dispatch({
               type: GET_POSTS_ERROR,
               payload: error
           })
        }


    }}