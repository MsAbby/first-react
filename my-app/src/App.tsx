import React from 'react';
import Login from './pages/login';
import Home from './pages/home';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Fragment } from 'react';
function App() {
  return (
    <Fragment>
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/home" component={Home}></Route>
          <Route exact path="/" component={Home} />
          <Redirect to={"/home"} />
        </Switch>
        </HashRouter>
    </Fragment>
  );
}

export default App;
