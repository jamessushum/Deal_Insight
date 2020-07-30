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
    return setActiveDeals(sortedByDate)
  }

  const getClosedDeals = async () => {
    const res = await DatabaseManager.getAllClosedDeals()
    const sortedByDate = res.sort((a, b) => new Date(a.closingDate) - new Date(b.closingDate))
    return setClosedDeals(sortedByDate)
  }

  const getLostDeals = async () => {
    const res = await DatabaseManager.getAllLostDeals()
    const sortedByDate = res.sort((a, b) => new Date(a.closingDate) - new Date(b.closingDate))
    return setLostDeals(sortedByDate)
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

  useEffect(() => {
    setFilteredActiveDeals(
      activeDeals.filter(deal => {
        return deal.userId === parseInt(dropdownValue)
      })
    )
    setFilteredClosedDeals(
      closedDeals.filter(deal => {
        return deal.userId === parseInt(dropdownValue)
      })
    )
    setFilteredLostDeals(
      lostDeals.filter(deal => {
        return deal.userId === parseInt(dropdownValue)
      })
    )
  }, [dropdownValue])

  return (
    <>
      <DealDeleteModal dealToDelete={dealToDelete} modal={modal} toggle={toggle} getActiveDeals={getActiveDeals} getClosedDeals={getClosedDeals} getLostDeals={getLostDeals} />
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item dealsNav">
              <button type="button" className="btn btn-light btn-sm" onClick={() => props.history.push('/deals/new')}>Add New Deal</button>
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
      <h4 className="activeDeals__title">Active Deals</h4>
      <div className="activeDeals__container">
        {filteredActiveDeals.map(deal => <DealCard key={deal.id} deal={deal} {...props} dealToBeDeleted={dealToBeDeleted} />)}
      </div>
      <h4 className="closedDeals__title">Closed Deals</h4>
      <div className="closedDeals__container">
        {filteredClosedDeals.map(deal => <DealCard key={deal.id} deal={deal} {...props} dealToBeDeleted={dealToBeDeleted} />)}
      </div>
      <h4 className="lostDeals__title">Lost Deals</h4>
      <div className="lostDeals__container">
        {filteredLostDeals.map(deal => <DealCard key={deal.id} deal={deal} {...props} dealToBeDeleted={dealToBeDeleted} />)}
      </div>
    </>
  )
}

export default Deals;