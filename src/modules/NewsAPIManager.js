import API from '../Settings';

const newsAPIurl = "https://newsapi.org/v2"

export default {
  // Method to get the 5 latest business headlines from NewsAPI to be displayed on dashboard
  async getDashboardHeadlines() {
    const response = await fetch(`${newsAPIurl}/everything?apiKey=${API.newsAPIkey}&domains=wsj.com, cnbc.com&sortBy=publishedAt&pageSize=5`)
    const result = await response.json()
    return result
  },
  async getCREHeadlines() {
    const response = await fetch(`${newsAPIurl}/everything?apiKey=${API.newsAPIkey}&domains=wsj.com, cnbc.com, bloomberg.com, marketwatch.com&q="commercial real estate"&sortBy=publishedAt`)
    const result = await response.json()
    return result
  }
}