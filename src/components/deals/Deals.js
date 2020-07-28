import React, { useState, useEffect } from 'react';
import DealCard from './DealCard';
import DatabaseManager from '../../modules/DatabaseManager';
import './Deals.css';

const Deals = () => {
  const [activeDeals, setActiveDeals] = useState([])
  const [closedDeals, setClosedDeals] = useState([])
  const [lostDeals, setLostDeals] = useState([])

  const getActiveDeals = async () => {
    const res = await DatabaseManager.getAllActiveDeals()
    return setActiveDeals(res);
  }

  const getClosedDeals = async () => {
    const res = await DatabaseManager.getAllClosedDeals()
    return setClosedDeals(res)
  }

  const getLostDeals = async () => {
    const res = await DatabaseManager.getAllLostDeals()
    return setLostDeals(res)
  }

  useEffect(() => {
    getActiveDeals()
    getClosedDeals()
    getLostDeals()
  }, [])

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
        {activeDeals.map(deal => <DealCard key={deal.id} deal={deal} />)}
      </div>
      <h4 className="closedDeals__title">Closed Deals</h4>
      <div className="closedDeals__container">
        {closedDeals.map(deal => <DealCard key={deal.id} deal={deal} />)}
      </div>
      <h4 className="lostDeals__title">Lost Deals</h4>
      <div className="lostDeals__container">
        {lostDeals.map(deal => <DealCard key={deal.id} deal={deal} />)}
      </div>
    </>
  )
}

export default Deals;