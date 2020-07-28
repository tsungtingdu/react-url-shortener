import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './pages/App'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App}></Route>
      <Route path="/users/signin" exact component={Signin}></Route>
      <Route path="/users/signup" exact component={Signup}></Route>
    </Switch>
  </BrowserRouter>
)

export default Router