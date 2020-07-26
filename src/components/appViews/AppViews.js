import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home/Home';
import Register from '../register/Register';
import Login from '../login/Login';

const AppViews = () => {

  return (
    <>
      <Route exact path="/" render={props => <Home />} />
      <Route exact path="/register" render={props => <Register {...props} />} />
      <Route exact path="/login" render={props => <Login {...props} />} />
    </>
  )
}

export default AppViews;