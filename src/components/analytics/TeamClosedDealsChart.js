import React, { useState, useEffect } from 'react';
import DatabaseManager from '../../modules/DatabaseManager';
import { Line } from 'react-chartjs-2';

const TeamClosedDealsChart = () => {
  const [chartData, setChartData] = useState({})
  const [totalClosed, setTotalClosed] = useState('')

  const chart = () => {
    let jan = 0
    let feb = 0
    let mar = 0
    let apr = 0
    let may = 0
    let jun = 0
    let jul = 0
    let aug = 0
    let sep = 0
    let oct = 0
    let nov = 0
    let dec = 0

    DatabaseManager.getAllClosedDeals()
      .then(res => {
        for (let i = 0; i < res.length; i++) {
          if (new Date(res[i].closingDate).toString().includes("Jan")) {
            jan++
          } else if (new Date(res[i].closingDate).toString().includes("Feb")) {
            feb++
          } else if (new Date(res[i].closingDate).toString().includes("Mar")) {
            mar++
          } else if (new Date(res[i].closingDate).toString().includes("Apr")) {
            apr++
          } else if (new Date(res[i].closingDate).toString().includes("May")) {
            may++
          } else if (new Date(res[i].closingDate).toString().includes("Jun")) {
            jun++
          } else if (new Date(res[i].closingDate).toString().includes("Jul")) {
            jul++
          } else if (new Date(res[i].closingDate).toString().includes("Aug")) {
            aug++
          } else if (new Date(res[i].closingDate).toString().includes("Sep")) {
            sep++
          } else if (new Date(res[i].closingDate).toString().includes("Oct")) {
            oct++
          } else if (new Date(res[i].closingDate).toString().includes("Nov")) {
            nov++
          } else if (new Date(res[i].closingDate).toString().includes("Dec")) {
            dec++
          }
        }
        setChartData({
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "2020",
              data: [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec],
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
            }
          ]
        })
        setTotalClosed(jan + feb + mar + apr + may + jun + jul + aug + sep + oct + nov + dec)
      })
  }

  useEffect(() => {
    chart()
  }, [])

  return (
    <div className="teamClosedDealsChart">
      <Line data={chartData} options={{
        title: {
          display: true,
          text: `Total: ${totalClosed}`,
          position: "bottom",
          fontSize: 20
        },
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

export default TeamClosedDealsChart;