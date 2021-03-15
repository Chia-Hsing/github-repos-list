import * as actionTypes from '../action/actionTypes'
import { updateObj } from '../../utils/utilities'

const initialState = {
    repos: [],
    loading: false,
    error: false,
    hasMore: true,
}

const isLoading = (state, action) => {
    return updateObj(state, {
        loading: true,
    })
}

const getPublicRepositoriesSuccess = (state, action) => {
    return updateObj(state, {
        repos: action.res.data,
        loading: false,
        error: false,
    })
}

const getPublicRepositoriesFailed = (state, action) => {
    return updateObj(state, {})
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.IS_LOADING:
            return isLoading(state, action)
        case actionTypes.GET_PUBLIC_REPOSITORIES_SUCCESS:
            return getPublicRepositoriesSuccess(state, action)
        case actionTypes.GET_PUBLIC_REPOSITORIES_FAILED:
            return getPublicRepositoriesFailed(state, action)
        default:
            return state
    }
}

export default reducer
