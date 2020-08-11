import React, { useState, useEffect } from 'react';
import MessageCard from './MessageCard';
import DatabaseManager from '../../modules/DatabaseManager';

const Messages = () => {
  const [messages, setMessages] = useState([])

  const getMessages = async () => {
    const res = await DatabaseManager.getAllMessages()
    setMessages(res)
    console.log(res)
  }

  useEffect(() => {
    getMessages()
  }, [])

  return (
    <div className="messages__container">
      <div className="messages__display">
        {messages.map(message => <MessageCard key={message.id} message={message} />)}
      </div>
      <div className="messages__input">
        
      </div>
    </div>
  )
}

export default Messages;