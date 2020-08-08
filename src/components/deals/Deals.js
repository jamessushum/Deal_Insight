import React, { useState, useEffect } from 'react';
import DealCard from './DealCard';
import DatabaseManager from '../../modules/DatabaseManager';
import DealDeleteModal from './DealDeleteModal';
import './Deals.css';

const Deals = ({...props}) => {
  const [activeDeals, setActiveDeals] = useState([])
  const [closedDeals, setClosedDeals] = useState([])
  const [lostDeals, setLostDeals] = useState([])
  const [modal, setModal] = useState(false)
  const [dealToDelete, setDealToDelete] = useState({id: "", dealName: ""})
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredActiveDeals, setFilteredActiveDeals] = useState([])
  const [filteredClosedDeals, setFilteredClosedDeals] = useState([])
  const [filteredLostDeals, setFilteredLostDeals] = useState([])
  const [users, setUsers] = useState([])
  const [dropdownValue, setDropdownValue] = useState('')

  const getActiveDeals = async () => {
    const res = await DatabaseManager.getAllActiveDeals()
    const sortedByDate = res.sort((a, b) => new Date(a.closingDate) - new Date(b.closingDate))
    setActiveDeals(sortedByDate)
    setFilteredActiveDeals(sortedByDate)
  }

  const getClosedDeals = async () => {
    const res = await DatabaseManager.getAllClosedDeals()
    const sortedByDate = res.sort((a, b) => new Date(a.closingDate) - new Date(b.closingDate))
    setClosedDeals(sortedByDate)
    setFilteredClosedDeals(sortedByDate)
  }

  const getLostDeals = async () => {
    const res = await DatabaseManager.getAllLostDeals()
    const sortedByDate = res.sort((a, b) => new Date(a.closingDate) - new Date(b.closingDate))
    setLostDeals(sortedByDate)
    setFilteredLostDeals(sortedByDate)
  }

  const toggle = () => setModal(!modal)

  const dealToBeDeleted = (deal) => {
    setDealToDelete({id: deal.id, dealName: deal.dealName})
    toggle()
  }

  const getUsers = async () => {
    const res = await DatabaseManager.getAllUsers()
    setUsers(res)
  }

  const handleSearchFieldChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleDropdownFieldChange = (e) => {
    setDropdownValue(e.target.value)
  }

  useEffect(() => {
    getActiveDeals()
    getClosedDeals()
    getLostDeals()
    getUsers()
  }, [])

  // Filters deals by search term
  useEffect(() => {
    setFilteredActiveDeals(
      activeDeals.filter(deal => {
        return deal.dealName.toLowerCase().includes(searchTerm.toLowerCase())
      })
    )
    setFilteredClosedDeals(
      closedDeals.filter(deal => {
        return deal.dealName.toLowerCase().includes(searchTerm.toLowerCase())
      })
    )
    setFilteredLostDeals(
      lostDeals.filter(deal => {
        return deal.dealName.toLowerCase().includes(searchTerm.toLowerCase())
      })
    )
  }, [searchTerm, activeDeals, closedDeals, lostDeals])

  // Filters deals by dropdown selection
  useEffect(() => {
    if (dropdownValue === "") {
      return
    } else {
      setFilteredActiveDeals(
        activeDeals.filter(deal => {
          return deal.userId === parseInt(dropdownValue)
        })
      )
    }
    if (dropdownValue === "") {
      return
    } else {
      setFilteredClosedDeals(
        closedDeals.filter(deal => {
          return deal.userId === parseInt(dropdownValue)
        })
      )
    }
    if (dropdownValue === "") {
      return
    } else {
      setFilteredLostDeals(
        lostDeals.filter(deal => {
          return deal.userId === parseInt(dropdownValue)
        })
      )
    }
  }, [dropdownValue, activeDeals, closedDeals, lostDeals])

  return (
    <>
      <DealDeleteModal dealToDelete={dealToDelete} modal={modal} toggle={toggle} getActiveDeals={getActiveDeals} getClosedDeals={getClosedDeals} getLostDeals={getLostDeals} />
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom2">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item dealsNav">
              <button type="button" className="btn btn-success btn-sm" onClick={() => props.history.push('/deals/new')}>Add New Deal</button>
            </li>
            <li className="nav-item dealsNav">
              <input className="form-control mr-sm-2 form-control-sm" id="search" type="search" placeholder="Search Deal by Name" onChange={handleSearchFieldChange} />
            </li>
            <li className="nav-item dealsNav">
              <select className="form-control mr-sm-2 form-control-sm" id="inlineFormCustomSelect" defaultValue="" onChange={handleDropdownFieldChange}>
                <option value="" disabled>Filter by Team Member</option>
                {users.map(user => <option key={user.id} value={user.id}>{user.firstName} {user.lastName}</option>)}
              </select>
            </li>
          </ul>
        </div>
      </nav>
      <div className="deals__container">
        <h4 className="activeDeals__title">Active Deals <span role="img" aria-label="hourglass">⏳</span></h4>
        <div className="activeDeals__container">
          {filteredActiveDeals.map(deal => <DealCard key={deal.id} deal={deal} {...props} dealToBeDeleted={dealToBeDeleted} />)}
        </div>
        <h4 className="closedDeals__title">Closed Deals <span role="img" aria-label="money">💰</span></h4>
        <div className="closedDeals__container">
          {filteredClosedDeals.map(deal => <DealCard key={deal.id} deal={deal} {...props} dealToBeDeleted={dealToBeDeleted} />)}
        </div>
        <h4 className="lostDeals__title">Lost Deals <span role="img" aria-label="skull">☠️</span></h4>
        <div className="lostDeals__container">
          {filteredLostDeals.map(deal => <DealCard key={deal.id} deal={deal} {...props} dealToBeDeleted={dealToBeDeleted} />)}
        </div>
      </div>
    </>
  )
}

export default Deals;