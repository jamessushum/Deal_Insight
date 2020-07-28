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
  }
}