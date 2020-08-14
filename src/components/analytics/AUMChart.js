import React, { useState, useEffect } from 'react';
import DatabaseManager from '../../modules/DatabaseManager';
import { Pie } from 'react-chartjs-2';

const AUMChart = () => {
  const [chartData, setChartData] = useState({})
  const [totalDollarAmount, setTotalDollarAmount] = useState(0)

  const chart = () => {
    let multiFamily = []
    let hospitality = []
    let industrial = []
    let retail = []
    let office = []
    let mixedUse = []
    let land = []
    let specialPurpose = []
    let totalAmount = 0

    DatabaseManager.getAllClosedDeals()
      .then(res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].propertyId === 1) {
            multiFamily.push(res[i])
            totalAmount += parseInt(res[i].bidPrice)
          } else if (res[i].propertyId === 2) {
            hospitality.push(res[i])
            totalAmount += parseInt(res[i].bidPrice)
          } else if (res[i].propertyId === 3) {
            industrial.push(res[i])
            totalAmount += parseInt(res[i].bidPrice)
          } else if (res[i].propertyId === 4) {
            retail.push(res[i])
            totalAmount += parseInt(res[i].bidPrice)
          } else if (res[i].propertyId === 5) {
            office.push(res[i])
            totalAmount += parseInt(res[i].bidPrice)
          } else if (res[i].propertyId === 6) {
            mixedUse.push(res[i])
            totalAmount += parseInt(res[i].bidPrice)
          } else if (res[i].propertyId === 7) {
            land.push(res[i])
            totalAmount += parseInt(res[i].bidPrice)
          } else if (res[i].propertyId === 8) {
            specialPurpose.push(res[i])
            totalAmount += parseInt(res[i].bidPrice)
          }
        }
        setChartData({
          labels: ["Multi-Family", "Hospitality", "Industrial", "Retail", "Office", "Mixed-Use", "Land", "Special Purpose"],
          datasets: [{
            data: [multiFamily.length, hospitality.length, industrial.length, retail.length, office.length, mixedUse.length, land.length, specialPurpose.length],
            backgroundColor: ["#FF9F41", "#FF6384", "#9967FF", "#37A2EB", "#4CC0C0", "#FFCD56", "#FDDBCB", "#CACBCF"],
            hoverBackgroundColor: ["#FF9F41", "#FF6384", "#9967FF", "#37A2EB", "#4CC0C0", "#FFCD56", "#FDDBCB", "#CACBCF"]
          }]
        })
        setTotalDollarAmount(totalAmount)
      })
  }

  useEffect(() => {
    chart()
  }, [])

  return (
    <div className="analytics__AUMChart">
      <Pie data={chartData} options={{
        title: {display: true, text: `${totalDollarAmount.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0})}`, position: "bottom", fontSize: 20 }
      }} />
    </div>
  )
}

export default AUMChart;