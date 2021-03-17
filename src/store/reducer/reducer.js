import * as actionTypes from '../action/actionTypes'
import { updateObj } from '../../utils/utilities'

const initialState = {
    repos: [],
    loading: false,
    error: false,
    comingData: false,
}

const isLoading = (state, action) => {
    return updateObj(state, {
        loading: true,
    })
}

const getPublicRepositoriesSuccess = (state, action) => {
    const newRepos = [...state.repos, ...action.res.data]
    return updateObj(state, {
        repos: newRepos,
        loading: false,
        error: false,
        comingData: action.res.data.length > 0,
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
