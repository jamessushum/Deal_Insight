import React from 'react';
import {Card, CardImg, CardText, CardBody, CardLink, CardTitle} from 'reactstrap';
import './DealCard.css';

const DealCard = () => {

  return (
    <div>
      <Card className="dealCard">
        <CardImg width="100%" src={require("./coming-soon.jpg")} alt="Coming Soon" />
        <CardBody>
          <CardTitle className="dealCard__title">5500 Park Ave</CardTitle>
          <CardText><span className="dealCard__bold">Type:</span> Office</CardText>
          <CardText><span className="dealCard__bold">Stage:</span> Prospecting</CardText>
          <CardText><span className="dealCard__bold">Closing Date:</span> 07/27/2020</CardText>
          <CardText><span className="dealCard__bold">Assigned:</span> Josh Owen</CardText>
          <div className="dealCard__links">
            <CardLink href="#">Details</CardLink>
            <CardLink href="#">Edit</CardLink>
            <CardLink href="#">Delete</CardLink>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default DealCard;