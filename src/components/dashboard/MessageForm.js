import React, { useState } from 'react';
import DatabaseManager from '../../modules/DatabaseManager';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const MessageForm = ({activeUser, getMessages}) => {
  const [message, setMessage] = useState({
    message: ""
  })

  const handleFieldChange = (e) => {
    const stateToChange = {...message}
    stateToChange[e.target.id] = e.target.value
    setMessage(stateToChange)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newMessage = {
      message: message.message,
      date: new Date(),
      userId: activeUser[0].id
    }

    if (message.message === "") {
      return
    } else {
      DatabaseManager.postNewMessage(newMessage)
      .then(() => {
        getMessages()
        setMessage({
          message: ""
        })
        document.getElementById('message').value = ""
      })
    }
  }

  return (
    <InputGroup>
      <Input id="message" placeholder="Type a message here..." onChange={handleFieldChange} />
      <InputGroupAddon addonType="append">
        <Button color="secondary" onClick={handleSubmit}>Send</Button>
      </InputGroupAddon>
    </InputGroup>
  )
}

export default MessageForm;