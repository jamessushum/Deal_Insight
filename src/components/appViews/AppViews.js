import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home/Home';

const AppViews = () => {

  return (
    <>
      <Route exact path="/" render={props => <Home />} />
    </>
  )
}

export default AppViews;