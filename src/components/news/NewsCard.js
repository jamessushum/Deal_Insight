import React from 'react';
import Moment from 'react-moment';
import { Card, CardTitle, CardText, CardImg, CardBody } from 'reactstrap';

const NewsCard = ({article}) => {

  return (
    <Card className="newsCard">
      {article.urlToImage === null ? null : <CardImg top width="100%" height="100%" src={article.urlToImage} alt="Article Image" />}
      <CardBody>
        <CardTitle><a href={article.url} target="_blank" className="newsCard__link" rel="noopener noreferrer">{article.title}</a></CardTitle>
        <CardText className="news__description">{article.description}</CardText>
        <CardText className="text-muted"><Moment fromNow>{new Date(article.publishedAt)}</Moment> / {article.source.name}</CardText>
      </CardBody>
    </Card>
  )
}

export default NewsCard;