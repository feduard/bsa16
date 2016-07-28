import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/app.js'
import UsersList from './components/usersList.js'
import { IndexRoute, Route, Router, browserHistory } from 'react-router';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './components/reducers/listReducer'

const store = createStore(reducer)

render(
    (<Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={UsersList} />
            </Route>
        </Router>
    </Provider>)
    , document.getElementById('root')
)
