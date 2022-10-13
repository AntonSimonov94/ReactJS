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

export const loginLoading = () => ({
    type: types.LOGIN_LOADING
})

export const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user
})

export const loginError = (error) => ({
    type: types.LOGIN_ERROR,
    payload: error.toString()
})

export const logoutLoading = () => ({
    type: types.LOGIN_LOADING
})

export const logoutSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user
})

export const logoutError = (error) => ({
    type: types.LOGIN_ERROR,
    payload: error.toString()
})