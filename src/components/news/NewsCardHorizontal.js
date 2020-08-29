import React from 'react';
import Moment from 'react-moment'
import './NewsCardHorizontal.css'

const NewsCardHorizontal = ({article}) => {

  return (
    <div className="article-card">
      <div className="article-image__container">
        {article.image === "None" ? <img src={require('./noImage.png')} alt="article-img" className="article-img" /> : <img src={article.image} alt="article-img" className="article-img" />}
      </div>
      <div className="article-body__container">
        <a href={article.url} target="_blank" className="article-title" rel="noopener noreferrer">{article.title}</a><br />
        <small className="article-meta"><Moment fromNow>{new Date(article.published)}</Moment></small>
        <p className="article-content">{article.description}</p>
      </div>
    </div>
  )
}

export default NewsCardHorizontal;