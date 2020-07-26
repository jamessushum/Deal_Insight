import React, { useState } from 'react';
import NavBar from './components/navBar/NavBar';
import AppViews from './components/appViews/AppViews';
import './App.css';

const App = () => {
  const isAuthenticated = () => sessionStorage.getItem('credentials') !== null

  const [hasUser, setHasUser] = useState(isAuthenticated())

  const clearUser = () => {
    sessionStorage.clear()
    setHasUser(isAuthenticated())
  }

  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} />
      <AppViews />
    </>
  )
}

export default App;
