import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/app.js'
import UsersList from './components/usersList.js'
import {IndexRoute, Route, Router, browserHistory} from 'react-router';

render(
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={UsersList} />
        </Route>
    </Router>)
    , document.getElementById('root')
)
