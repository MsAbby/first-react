import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'

const PCRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={ Home }></Route>
                <Route path='/login' component={ Login }></Route>
            </Switch>
        </Router>
    )
}

export default PCRouter