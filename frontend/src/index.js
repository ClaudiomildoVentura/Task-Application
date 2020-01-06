import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import { Provider } from 'react-redux'
import App from './main/app'
import reducer from './main/reducers'

const store = applyMiddleware(promise)(createStore)(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))