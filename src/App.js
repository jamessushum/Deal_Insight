import React, { useState } from 'react';
import NavBar from './components/navBar/NavBar';
import AppViews from './components/appViews/AppViews';
import './App.css';

const App = () => {
  const isAuthenticated = () => sessionStorage.getItem('credentials') !== null

  const [hasUser, setHasUser] = useState(isAuthenticated())

  const setUserAuth = (user) => {
    sessionStorage.setItem('credentials', JSON.stringify(user))
    setHasUser(isAuthenticated())
  }

  const clearUser = () => {
    sessionStorage.clear()
    setHasUser(isAuthenticated())
  }

  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} />
      <AppViews hasUser={hasUser} setUserAuth={setUserAuth} />
    </>
  )
}

export default App;
