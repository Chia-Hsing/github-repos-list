import * as actionTypes from './actionTypes'

export const isLoading = () => dispatch => {
    return dispatch({ type: actionTypes.IS_LOADING })
}

export const getPublicRepositories = (page, perPage) => async (dispatch, getState, api) => {
    try {
        const res = await api.get(`page=${page}&per_page=${perPage}`)

        dispatch({ type: actionTypes.GET_PUBLIC_REPOSITORIES_SUCCESS, res })
    } catch (error) {
        dispatch({ type: actionTypes.GET_PUBLIC_REPOSITORIES_FAILED, error })
    }
}
