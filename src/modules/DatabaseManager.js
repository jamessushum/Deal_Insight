const remoteURL = "http://localhost:8088"

export default {
  // Method to post new user to database
  async postNewUser(newUserObj) {
    const response = await fetch(`${remoteURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUserObj)
    })
    const result = await response.json()
    return result
  },
  // Method to get user from database whose username matches username parameter
  async findUserByUsername(username) {
    const response = await fetch(`${remoteURL}/users?username=${username}`)
    const result = await response.json()
    return result
  },
  // Method to get user from database whose email matches email parameter
  async findUserByEmail(email) {
    const response = await fetch(`${remoteURL}/users?email=${email}`)
    const result = await response.json()
    return result
  },
  // Method to get user from database whose password matches password parameter
  async findUserByPassword(password) {
    const response = await fetch(`${remoteURL}/users?password=${password}`)
    const result = await response.json()
    return result
  },
  // Method to get all "Active" status deals from database expanding user, property, class, stage and status data
  async getAllActiveDeals() {
    const response = await fetch(`${remoteURL}/deals?_expand=user&_expand=property&_expand=class&_expand=stage&_expand=status&statusId=1`)
    const result = await response.json()
    return result
  },
  // Method to get all "Closed" status deals from database expanding user, property, class, stage and status data
  async getAllClosedDeals() {
    const response = await fetch(`${remoteURL}/deals?_expand=user&_expand=property&_expand=class&_expand=stage&_expand=status&statusId=2`)
    const result = await response.json()
    return result
  },
  // Method to get all "Lost" status deals from database expanding user, property, class, stage and status data
  async getAllLostDeals() {
    const response = await fetch(`${remoteURL}/deals?_expand=user&_expand=property&_expand=class&_expand=stage&_expand=status&statusId=3`)
    const result = await response.json()
    return result
  },
  // Method to get all property types from database
  async getAllPropertyTypes() {
    const response = await fetch(`${remoteURL}/properties`)
    const result = await response.json()
    return result
  },
  // Method to get all property classes from database
  async getAllPropertyClasses() {
    const response = await fetch(`${remoteURL}/classes`)
    const result = await response.json()
    return result
  },
  // Method to get all process stages from database
  async getAllStages() {
    const response = await fetch(`${remoteURL}/stages`)
    const result = await response.json()
    return result
  },
  // Method to get all deal statuses from database
  async getAllStatuses() {
    const response = await fetch(`${remoteURL}/statuses`)
    const result = await response.json()
    return result
  },
  // Method to get all users from database
  async getAllUsers() {
    const response = await fetch(`${remoteURL}/users`)
    const result = await response.json()
    return result
  },
  // Method to post new deal to database
  async postNewDeal(newDeal) {
    const response = await fetch(`${remoteURL}/deals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newDeal)
    })
    const result = await response.json()
    return result
  },
  // Method to get single deal per id in parameter from database
  async getSingleDeal(id) {
    const response = await fetch(`${remoteURL}/deals/${id}?_expand=user&_expand=property&_expand=class&_expand=stage&_expand=status`)
    const result = await response.json()
    return result
  },
  // Method to update existing deal in database per object in parameter
  async updateDeal(editedDeal) {
    const response = await fetch(`${remoteURL}/deals/${editedDeal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedDeal)
    })
    const result = await response.json()
    return result
  },
  // Method to delete existing deal in database per id in parameter
  async deleteDeal(id) {
    const response = await fetch(`${remoteURL}/deals/${id}`, {
      method: "DELETE"
    })
    const result = await response.json()
    return result
  },
  // Method to get all of active user's active deals from database
  async activeUsersActiveDeals(activeUserId) {
    const response = await fetch(`${remoteURL}/deals?userId=${activeUserId}&statusId=1`)
    const result = await response.json()
    return result
  }
}