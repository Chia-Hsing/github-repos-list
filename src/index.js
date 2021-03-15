import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import axios from 'axios'

import './index.css'
import App from './App'
import reducer from './store/reducer/reducer'
import reportWebVitals from './reportWebVitals'

const composeEnhancers =
    process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose

const axiosInstance = axios.create({
    baseURL: 'https://api.github.com/users/Chia-Hsing/repos?',
})

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk.withExtraArgument(axiosInstance))))

const app = (
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'))

reportWebVitals()
