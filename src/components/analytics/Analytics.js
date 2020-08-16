import React from 'react';
import TeamStatsTable from './TeamStatsTable';
import AUMChart from './AUMChart';
import TeamActiveDealsChart from './TeamActiveDealsChart';
import TeamClosedDealsChart from './TeamClosedDealsChart';
import './Analytics.css';

const Analytics = () => {

  return (
    <>
      <h4 className="analytics__title">Analytics <span role="img" aria-label="chart">📊</span></h4>
      <div className="analytics__container">
        <div className="analytics__containerTop">
          <div className="analytics__table">
            <h4 className="analytics__teamStatsTitle">Team Stats</h4>
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
            <h4 className="analytics__teamClosedDealsTitle">Team Closed Deals</h4>
              <TeamClosedDealsChart />
          </div>
        </div>
      </div>
    </>
  )
}

export default Analytics;