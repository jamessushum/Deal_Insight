import React from 'react';
import './Deals.css';

const Deals = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button type="button" className="btn btn-light">Add New Deal</button>
            </li>
            <li className="nav-item">
              <input className="form-control mr-sm-2" type="search" placeholder="Search Deal by Name" />
            </li>
            <li className="nav-item">
              <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" defaultValue="">
                <option value="" disabled>Filter by Team Member</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Deals;