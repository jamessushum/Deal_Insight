import React from 'react';
import Moment from 'react-moment';
import { Card, CardTitle, CardText } from 'reactstrap';

const NewsCard = ({article}) => {

  return (
    <div className="newsCard">
      <Card body>
        <CardTitle><a href={article.url} target="_blank" className="newsCard__link" rel="noopener noreferrer">{article.title}</a></CardTitle>
        <CardText>{article.description}</CardText>
        <CardText><Moment fromNow>{new Date(article.publishedAt)}</Moment></CardText>
      </Card>
    </div>
  )
}

export default NewsCard;