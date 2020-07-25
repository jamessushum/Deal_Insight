import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Deal Insight
      </Link>

      <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              <button className="btn btn-outline-secondary">Register</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              <button className="btn btn-secondary">Login</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;