import React from 'react';
import TeamStatsTable from './TeamStatsTable';
import AUMChart from './AUMChart';
import TeamActiveDealsChart from './TeamActiveDealsChart';
import './Analytics.css';

const Analytics = () => {

  return (
    <>
      <h4 className="analytics__title">Analytics</h4>
      <div className="analytics__container">
        <div className="analytics__containerTop">
          <div className="analytics__table">
            <h4>Team Stats</h4>
            <TeamStatsTable />
          </div>
          <div className="analytics__chart1">
            <h4 className="analytics__AUM-title">Assets Under Management</h4>
            <AUMChart />
          </div>
        </div>
        <div className="analytics__containerBottom">
          <div className="analytics__chart2">
            <h4 className="analytics__teamActiveDealsTitle">Team Active Deals</h4>
            <TeamActiveDealsChart />
          </div>
          <div className="analytics__chart3">
            Chart 3
          </div>
        </div>
      </div>
    </>
  )
}

export default Analytics;