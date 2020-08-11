import React from 'react';
import './MessageCard.css';

const MessageCard = ({message}) => {

  return (
    <div className="messageCard">
      <div className="messageCard__header">
        <span className="messageCard__name">{message.user.firstName} {message.user.lastName}</span>
        <span className="messageCard__time">{message.date}</span>
      </div>
      <div className="messageCard__body">
        <p className="messageCard__message">{message.message}</p>
      </div>
    </div>
  )
}

export default MessageCard;