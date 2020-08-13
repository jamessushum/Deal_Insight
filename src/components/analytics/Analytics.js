import React from 'react';
import TeamStatsTable from './TeamStatsTable';
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
            Chart 1
          </div>
        </div>
        <div className="analytics__containerBottom">
          <div className="analytics__chart2">
            Chart 2
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