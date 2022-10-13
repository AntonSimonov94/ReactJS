import * as types from './actions'

export const errorsNews = (e) => ({
    type: types.GET_POSTS_ERROR,
    payload: e
})

export const loadingNews = () => ({
    type: types.GET_POSTS_LOADING
})

export const registryLoading = () => ({
    type: types.REGISTRY_LOADING
})

export const registrySuccess = (user) => ({
    type: types.REGISTRY_SUCCESS,
    payload: user
})

export const registryError = (error) => ({
    type: types.REGISTRY_ERROR,
    payload: error.toString()
})