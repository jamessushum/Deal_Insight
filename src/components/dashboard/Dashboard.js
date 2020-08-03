import React from 'react';
import UserActiveDealsChart from './UserActiveDealsChart';
import './Dashboard.css';

const Dashboard = () => {
  const activeUser = JSON.parse(sessionStorage.getItem('credentials'))

  return (
    <>
      <div className="dashboard__welcome">
        <h4>Welcome, {activeUser[0].firstName}!</h4>
      </div>
      <div className="dashboard__container">
        <div className="dashboard__container-left">
          <div className="dashboard__stats">
            <div className="dashboard__stats-left">
              <h4 className="dashboard__statsActiveTitle">Active Deals in Pipeline</h4>
              <UserActiveDealsChart activeUser={activeUser} />
            </div>
            <div className="dashboard__stats-right">
              <h5>Deals Closed</h5>
            </div>
          </div>
          <div className="dashboard__messages">
            <div className="dashboard__messages-display">

            </div>
            <div className="dashboard__messages-input">
              Messages
            </div>
          </div>
        </div>
        <div className="dashboard__container-right">
          <div className="dashboard__headlines">
            Top Headlines
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;

