export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_LOADING = 'GET_POSTS_LOADING'
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR'

export const errorsNews = (e) => ({
    type: GET_POSTS_ERROR,
    payload: e
})

export const loadingNews = () => ({
    type: GET_POSTS_LOADING
})