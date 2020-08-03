import React, { useState, useEffect } from 'react';
import DatabaseManager from '../../modules/DatabaseManager';
import { Doughnut } from 'react-chartjs-2';

const UserActiveDealsChart = ({activeUser}) => {
  const [chartData, setChartData] = useState({})
  const [totalDeals, setTotalDeals] = useState('')

  const chart = () => {
    let prospecting = []
    let underwriting = []
    let letterOfIntent = []
    let dueDiligence = []
    let bid = []

    DatabaseManager.activeUsersActiveDeals(activeUser[0].id)
      .then(res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].stageId === 1) {
            prospecting.push(res[i])
          } else if (res[i].stageId === 2) {
            underwriting.push(res[i])
          } else if (res[i].stageId === 3) {
            letterOfIntent.push(res[i])
          } else if (res[i].stageId === 4) {
            dueDiligence.push(res[i])
          } else if (res[i].stageId === 5) {
            bid.push(res[i])
          }
        }
        setChartData({
          labels: ["Prospecting", "Underwriting", "Letter of Intent", "Due Diligence", "Bid"],
          datasets: [{
            data: [prospecting.length, underwriting.length, letterOfIntent.length, dueDiligence.length, bid.length],
            backgroundColor: ["#FF9F41", "#FF6384", "#9967FF", "#37A2EB", "#4CC0C0"],
            hoverBackgroundColor: ["#FF9F41", "#FF6384", "#9967FF", "#37A2EB", "#4CC0C0"]
          }]
        })
        setTotalDeals(prospecting.length + underwriting.length + letterOfIntent.length + dueDiligence.length + bid.length)
      })
  }

  useEffect(() => {
    chart()
  }, [])

  return (
    <div className="dashboard__activeDealsChart">
      <Doughnut data={chartData} options={{
        title: {display: true, text: `Total: ${totalDeals}`, position: "bottom", fontSize: 20 },
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI
      }} />
    </div>
  )
}

export default UserActiveDealsChart;
