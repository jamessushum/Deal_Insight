import API from '../Settings';

const newsAPIurl = "https://newsapi.org/v2"

export default {
  async getDashboardHeadlines() {
    const response = await fetch(`${newsAPIurl}/top-headlines?country=us&category=business&pageSize=5&apiKey=${API.newsAPIkey}`)
    const result = await response.json()
    return result
  }
}
