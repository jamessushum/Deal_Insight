import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap';
import './DealCard.css';

const DealCard = ({deal, dealToBeDeleted, ...props}) => {

  return (
    <div>
      <Card className="dealCard">
        <CardImg width="100%" src={require("./coming-soon.jpg")} alt="Coming Soon" />
        <CardBody>
          <CardTitle className="dealCard__title">{deal.dealName}</CardTitle>
          <CardText><span className="dealCard__bold">Type:</span> {deal.property.type}</CardText>
          <CardText><span className="dealCard__bold">Stage:</span> {deal.stage.stage}</CardText>
          <CardText><span className="dealCard__bold">Closing Date:</span> {new Date(`${deal.closingDate} EST`).toLocaleDateString()}</CardText>
          <CardText><span className="dealCard__bold">Assigned:</span> {deal.user.firstName} {deal.user.lastName}</CardText>
          <div className="dealCard__links">
            <Button color="info" size="sm" onClick={() => props.history.push(`/deals/${deal.id}/details`)}>Details</Button>
            <Button color="warning" size="sm" onClick={() => dealToBeDeleted(deal)}>Delete</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default DealCard;