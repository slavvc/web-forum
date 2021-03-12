import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'

import './customBootstrap.scss'

// import './mockServer'

import App from 'Components/App/App'

import store from 'Store/store'


ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)