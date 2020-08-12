import React, { useState, useEffect } from 'react';
import MessageCard from './MessageCard';
import DatabaseManager from '../../modules/DatabaseManager';
import MessageForm from './MessageForm';

const Messages = ({activeUser}) => {
  const [messages, setMessages] = useState([])

  const getMessages = async () => {
    const res = await DatabaseManager.getAllMessages()
    setMessages(res)
    scrollToBottom()
  }

  // Method to automatically scroll the messages display to the bottom when a new message is received
  const scrollToBottom = () => {
    const objDiv = document.querySelector('.messages__display')
    objDiv.scrollTop = objDiv.scrollHeight
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
        <MessageForm activeUser={activeUser} getMessages={getMessages} />
      </div>
    </div>
  )
}

export default Messages;