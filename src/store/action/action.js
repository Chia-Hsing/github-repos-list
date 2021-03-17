import * as actionTypes from './actionTypes'

const isLoading = () => {
    return { type: actionTypes.IS_LOADING }
}

export const getPublicRepos = (page, perPage) => async (dispatch, getState, api) => {
    try {
        dispatch(isLoading())

        const res = await api.get('/users/Chia-Hsing/repos', {
            params: {
                page,
                per_page: perPage,
            },
        })

        setTimeout(() => {
            dispatch({ type: actionTypes.GET_PUBLIC_REPOSITORIES_SUCCESS, res })
        }, 1000)
    } catch (error) {
        dispatch({ type: actionTypes.GET_PUBLIC_REPOSITORIES_FAILED, error })
    }
}
