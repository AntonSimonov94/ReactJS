import * as types from './actions'

export const errorsNews = (e) => ({
    type: types.GET_POSTS_ERROR,
    payload: e
})

export const loadingNews = () => ({
    type: types.GET_POSTS_LOADING
})