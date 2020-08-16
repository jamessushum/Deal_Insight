import React, { useState, useEffect } from 'react';
import DatabaseManager from '../../modules/DatabaseManager';
import { Table } from 'reactstrap';

const TeamStatsTable = () => {
  const [data, setData] = useState([])


  const getUsersData = async () => {
    const res = await DatabaseManager.getUsersDealsData()
    setData(res)
  }

  useEffect(() => {
    getUsersData()
  }, [])

  return (
    <Table striped bordered className="teamStatsTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Active Deals</th>
          <th>Closed Deals</th>
          <th>Lost Deals</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.deals.filter(deal => deal.statusId === 1).length}</td>
              <td>{user.deals.filter(deal => deal.statusId === 2).length}</td>
              <td>{user.deals.filter(deal => deal.statusId === 3).length}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default TeamStatsTable;