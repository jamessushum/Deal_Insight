import React, { useState, useEffect } from 'react';
import NewsAPIManager from '../../modules/NewsAPIManager';
import NewsCard from './NewsCard';
import './News.css';

const News = () => {
  const [creNews, setCRENews] = useState([])

  const getCRENews = async () => {
    const res = await NewsAPIManager.getCREHeadlines()
    setCRENews(res.articles)
  }

  useEffect(() => {
    // getCRENews()
  }, [])

  return (
    <div>
      <h5>Commercial Real Estate Headlines</h5>
      <div className="news__creContainer">
        {creNews.map(article => <NewsCard key={article.title} article={article} />)}
      </div>
    </div>
  )
}

export default News;