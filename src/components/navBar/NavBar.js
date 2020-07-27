import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './NavBar.css'

const NavBar = ({hasUser, clearUser, ...props}) => {
  const handleLogout = () => {
    clearUser()
    props.history.push('/')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* Logo */}
      <Link className="navbar-brand" to="/">
        Deal Insight
      </Link>

      <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          {/* Dashboard */}
          {hasUser ? <li className="nav-item mainNav"><Link className="nav-link" to="/dashboard">Dashboard</Link></li> : null}
          {/* Deals */}
          {hasUser ? <li className="nav-item mainNav"><Link className="nav-link" to="/deals">Deals</Link></li> : null}
          {/* News */}
          {hasUser ? <li className="nav-item mainNav"><Link className="nav-link" to="/news">News</Link></li> : null}
          {/* Analytics */}
          {hasUser ? <li className="nav-item mainNav"><Link className="nav-link" to="/analytics">Analytics</Link></li> : null}
          {/* Register */}
          {hasUser ? null : <li className="nav-item"><Link className="nav-link" to="/register"><button className="btn btn-outline-secondary">Register</button></Link></li>}
          {/* Login & Logout */}
          {hasUser ? <li className="nav-item"><button className="btn btn-secondary" onClick={handleLogout}>Logout</button></li> : <li className="nav-item"><Link className="nav-link" to="/login"><button className="btn btn-secondary">Login</button></Link></li>}
        </ul>
      </div>
    </nav>
  )
}

// Using withRouter to access ...props on handleLogout method
export default withRouter(NavBar);