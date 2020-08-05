import React, { useState, useEffect } from 'react';
import NewsAPIManager from '../../modules/NewsAPIManager';
import NewsCard from '../news/NewsCard';

const DashboardNewsHeadlines = () => {
  const [news, setNews] = useState([])

  const getNews = async () => {
    const res = await NewsAPIManager.getDashboardHeadlines()
    setNews(res.articles)
  }

  useEffect(() => {
    getNews()
  }, [])

  return (
    <div className="dashboard__headlinesNewsContainer">
      {news.map(article => <NewsCard key={article.title} article={article} />)}
    </div>
  )
}

export default DashboardNewsHeadlines;