import React from 'react';
import Moment from 'react-moment';
import './MessageCard.css';

const MessageCard = ({message}) => {
  const calendarStrings = {
    lastDay : '[Yesterday at] LT',
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    lastWeek : '[last] dddd [at] LT',
    nextWeek : 'dddd [at] LT',
    sameElse : 'L'
  }

  return (
    <div className="messageCard">
      <div className="messageCard__header">
        <span className="messageCard__name">{message.user.firstName} {message.user.lastName}</span>
        <span className="messageCard__time"><small><Moment calendar={calendarStrings}>{message.date}</Moment></small></span>
      </div>
      <div className="messageCard__body">
        <p className="messageCard__message">{message.message}</p>
      </div>
    </div>
  )
}

export default MessageCard;