import React from 'react';
import UserActiveDealsChart from './UserActiveDealsChart';
import UserClosedDealsChart from './UserClosedDealsChart';
import DashboardNewsHeadlines from './DashboardNewsHeadlines';
import Messages from './Messages';
import './Dashboard.css';

const Dashboard = () => {
  const activeUser = JSON.parse(sessionStorage.getItem('credentials'))

  return (
    <>
      <div className="dashboard__welcome">
        <h4>Welcome, {activeUser[0].firstName} 😎</h4>
      </div>
      <div className="dashboard__container">
        <div className="dashboard__container-left">
          <div className="dashboard__stats">
            <div className="dashboard__stats-left">
              <h4 className="dashboard__statsActiveTitle">Pending Deals</h4>
              <UserActiveDealsChart activeUser={activeUser} />
            </div>
            <div className="dashboard__stats-right">
              <h4 className="dashboard__statsClosedTitle">Deals Closed</h4>
              <UserClosedDealsChart activeUser={activeUser} />
            </div>
          </div>
          <div className="dashboard__messages">
            <div className="dashboard__messagesMain">
            <h4 className="dashboard__messagesTitle">Messages</h4>
            <Messages activeUser={activeUser} />
            </div>
          </div>
        </div>
        <div className="dashboard__container-right">
          <div className="dashboard__headlines">
            <h4 className="dashboard__headlinesTitle">Latest Headlines</h4>
            <DashboardNewsHeadlines />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;

