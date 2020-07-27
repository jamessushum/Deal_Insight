import React from 'react';
import DealCard from './DealCard';
import './Deals.css';

const Deals = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item dealsNav">
              <button type="button" className="btn btn-light btn-sm">Add New Deal</button>
            </li>
            <li className="nav-item dealsNav">
              <input className="form-control mr-sm-2 form-control-sm" type="search" placeholder="Search Deal by Name" />
            </li>
            <li className="nav-item dealsNav">
              <select className="form-control mr-sm-2 form-control-sm" id="inlineFormCustomSelect" defaultValue="">
                <option value="" disabled>Filter by Team Member</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
      <h4 className="activeDeals__title">Active Deals</h4>
      <div className="activeDeals__container">
        <DealCard />
      </div>
      <h4 className="closedDeals__title">Closed Deals</h4>
      <div className="closedDeals__container">
        <DealCard />
      </div>
      <h4 className="lostDeals__title">Lost Deals</h4>
      <div className="lostDeals__container">
        <DealCard />
      </div>
    </>
  )
}

export default Deals;