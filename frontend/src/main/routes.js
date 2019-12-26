import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Task from '../components/Task'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Task} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/todos' />
    </Router>
)