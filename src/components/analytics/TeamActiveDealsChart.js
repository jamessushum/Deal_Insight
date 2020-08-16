import React, { useState, useEffect } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import DatabaseManager from '../../modules/DatabaseManager';

const TeamActiveDealsChart = () => {
  const [chartData, setChartData] = useState({})
  const [totalActiveDeals, setTotalActiveDeals] = useState('')

  const chart = () => {
    let prospecting = []
    let underwriting = []
    let letterOfIntent = []
    let dueDiligence = []
    let bid = []

    DatabaseManager.getAllActiveDeals()
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
          datasets: [
            {
              data: [prospecting.length, underwriting.length, letterOfIntent.length, dueDiligence.length, bid.length],
              backgroundColor: ["#FFE1E6", "#FFECDB", "#DEF2F2", "#D9ECFB", "#EBE0FF"],
              borderColor: ["#FF6384", "#FF9F41", "#4CC0C0", "#37A2EB", "#9968FF"],
              borderWidth: 1
            }
          ]
        })
        setTotalActiveDeals(prospecting.length + underwriting.length + letterOfIntent.length + dueDiligence.length + bid.length)
      })
  }

  useEffect(() => {
    chart()
  }, [])

  return (
    <div className="teamActiveDealsChart">
      <HorizontalBar data={chartData} options={{
        scales: {
          xAxes: [
            {
              ticks: {
                min: 0,
                stepSize: 1
              }
            }
          ]
        },
        legend: {
          display: false
        },
        title: {
          display: true,
          text: `Total: ${totalActiveDeals}`,
          position: "bottom",
          fontSize: 20
        }
      }} />
    </div>
  )
}

export default TeamActiveDealsChart;