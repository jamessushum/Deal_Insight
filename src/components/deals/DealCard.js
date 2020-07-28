import React from 'react';
import {Card, CardImg, CardText, CardBody, CardLink, CardTitle} from 'reactstrap';
import './DealCard.css';

const DealCard = ({deal}) => {

  return (
    <div>
      <Card className="dealCard">
        <CardImg width="100%" src={require("./coming-soon.jpg")} alt="Coming Soon" />
        <CardBody>
          <CardTitle className="dealCard__title">{deal.dealName}</CardTitle>
          <CardText><span className="dealCard__bold">Type:</span> {deal.property.type}</CardText>
          <CardText><span className="dealCard__bold">Stage:</span> {deal.stage.stage}</CardText>
          <CardText><span className="dealCard__bold">Closing Date:</span> {deal.closingDate}</CardText>
          <CardText><span className="dealCard__bold">Assigned:</span> {deal.user.firstName} {deal.user.lastName}</CardText>
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