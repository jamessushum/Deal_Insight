import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../home/Home';
import Register from '../register/Register';
import Login from '../login/Login';
import Dashboard from '../dashboard/Dashboard';
import Deals from '../deals/Deals';
import News from '../news/News';
import Analytics from '../analytics/Analytics';
import DealForm from '../deals/DealForm';

const AppViews = ({hasUser, setUserAuth}) => {

  return (
    <>
      {/* Home */}
      <Route exact path="/" render={props => <Home />} />
      {/* Register */}
      <Route exact path="/register" render={props => <Register setUserAuth={setUserAuth} {...props} />} />
      {/* Login */}
      <Route exact path="/login" render={props => <Login setUserAuth={setUserAuth} {...props} />} />
      {/* Dashboard */}
      <Route exact path="/dashboard" render={props => hasUser ? <Dashboard /> : <Redirect to="/login" />} />
      {/* Deals */}
      <Route exact path="/deals" render={props => hasUser ? <Deals {...props} /> : <Redirect to="/login" />} />
      {/* Add New Deal */}
      <Route exact path="/deals/new" render={props => hasUser ? <DealForm /> : <Redirect to="/login" />} />
      {/* News */}
      <Route exact path="/news" render={props => hasUser ? <News /> : <Redirect to="/login" />} />
      {/* Analytics */}
      <Route exact path="/analytics" render={props => hasUser ? <Analytics /> : <Redirect to="/login" />} />
    </>
  )
}

export default AppViews;