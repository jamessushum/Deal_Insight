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
  }
}