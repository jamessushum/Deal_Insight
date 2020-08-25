const newsAPIurl = "https://newsapi.org/v2"
const newsAPIKey = process.env.REACT_APP_NEWS_API_KEY

export default {
  // Method to get the 5 latest business headlines from NewsAPI to be displayed on dashboard
  async getDashboardHeadlines() {
    const response = await fetch(`${newsAPIurl}/everything?apiKey=${newsAPIKey}&domains=wsj.com, cnbc.com&sortBy=publishedAt&pageSize=5`)
    const result = await response.json()
    return result
  },
  // Method to get the latest commercial real estate headlines from NewsAPI to be displayed on news page
  async getCREHeadlines() {
    const response = await fetch(`${newsAPIurl}/everything?apiKey=${newsAPIKey}&domains=wsj.com, cnbc.com, bloomberg.com, reuters.com&q="commercial real estate"&sortBy=publishedAt`)
    const result = await response.json()
    return result
  },
  // Method to get the latest business headlines from NewsAPI to be displayed on news page
  async getBizHeadlines() {
    const response = await fetch(`${newsAPIurl}/everything?apiKey=${newsAPIKey}&sortBy=publishedAt&domains=wsj.com, cnbc.com, bloomberg.com`)
    const result = await response.json()
    return result
  }
}