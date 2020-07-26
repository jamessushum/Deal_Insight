import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home/Home';
import Register from '../register/Register';

const AppViews = () => {

  return (
    <>
      <Route exact path="/" render={props => <Home />} />
      <Route exact path="/register" render={props => <Register {...props} />} />
    </>
  )
}

export default AppViews;