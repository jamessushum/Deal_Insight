const newsAPIurl = "https://api.currentsapi.services/v1"
const newsAPIKey = process.env.REACT_APP_NEWS_API_KEY

export default {
  // Method to get the latest general headlines from News API to be displayed on dashboard
  async getDashboardHeadlines() {
    const response = await fetch(`${newsAPIurl}/search?apiKey=${newsAPIKey}&domain=cnbc.com,wsj.com&country=us`)
    const result = await response.json()
    return result
  },
  // Method to get the latest commercial real estate headlines from News API to be displayed on news page
  async getCREHeadlines() {
    const response = await fetch(`${newsAPIurl}/search?apiKey=${newsAPIKey}&domain=cnbc.com,wsj.com,bloomberg.com&country=us&keywords=commercial real estate`)
    const result = await response.json()
    return result
  },
  // Method to get the latest business headlines from News API to be displayed on news page
  async getBizHeadlines() {
    const response = await fetch(`${newsAPIurl}/search?apiKey=${newsAPIKey}&domain=cnbc.com,wsj.com&country=us&category=business`)
    const result = await response.json()
    return result
  }
}