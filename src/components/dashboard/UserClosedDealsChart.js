import React, { useState, useEffect } from 'react';
import DatabaseManager from '../../modules/DatabaseManager';
import { Line } from 'react-chartjs-2';

const UserClosedDealsChart = ({activeUser}) => {
  const [chartData, setChartData] = useState({})
  const [totalDeals, setTotalDeals] = useState('')

  const chart = () => {
    let jan = []
    let feb = []
    let mar = []
    let apr = []
    let may = []
    let jun = []
    let jul = []
    let aug = []
    let sep = []
    let oct = []
    let nov = []
    let dec = []

    DatabaseManager.activeUsersClosedDeals(activeUser[0].id)
      .then(res => {
        for (let i = 0; i < res.length; i++) {
          if (new Date(res[i].closingDate).toString().includes("Jan")) {
            jan.push(res[i])
          } else if (new Date(res[i].closingDate).toString().includes("Feb")) {
            feb.push(res[i])
          } else if (new Date(res[i].closingDate).toString().includes("Mar")) {
            mar.push(res[i])
          } else if (new Date(res[i].closingDate).toString().includes("Apr")) {
            apr.push(res[i])
          } else if (new Date(res[i].closingDate).toString().includes("May")) {
            may.push(res[i])
          } else if (new Date(res[i].closingDate).toString().includes("Jun")) {
            jun.push(res[i])
          } else if (new Date(res[i].closingDate).toString().includes("Jul")) {
            jul.push(res[i])
          } else if (new Date(res[i].closingDate).toString().includes("Aug")) {
            aug.push(res[i])
          } else if (new Date(res[i].closingDate).toString().includes("Sep")) {
            sep.push(res[i])
          } else if (new Date(res[i].closingDate).toString().includes("Oct")) {
            oct.push(res[i])
          } else if (new Date(res[i].closingDate).toString().includes("Nov")) {
            nov.push(res[i])
          } else if (new Date(res[i].closingDate).toString().includes("Dec")) {
            dec.push(res[i])
          }
        }
        setChartData({
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
            label: "2020",
            data: [jan.length, feb.length, mar.length, apr.length, may.length, jun.length, jul.length, aug.length, sep.length, oct.length, nov.length, dec.length],
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "rgba(75,192,192,0.4)",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "rgba(75,192,192,0.4)",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10
          }]
        })
        setTotalDeals(jan.length + feb.length + mar.length + apr.length + may.length + jun.length + jul.length + aug.length + sep.length + oct.length + nov.length + dec.length)
      })
  }

  useEffect(() => {
    chart()
  }, [])

  return (
    <div className="dashboard__closedDealsChart">
      <Line data={chartData} options={{
        title: {display: true, text: `Total: ${totalDeals}`, position: "bottom", fontSize: 20 },
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                stepSize: 1
              }
            }
          ]
        }
      }} />
    </div>
  )
}

export default UserClosedDealsChart;