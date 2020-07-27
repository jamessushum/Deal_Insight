import React, { useState } from 'react';
import DatabaseManager from '../../modules/DatabaseManager';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import './Login.css';

const Login = ({setUserAuth, ...props}) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })

  const [fieldsCompleted, setFieldsCompleted] = useState(true)

  const [usernameExist, setUsernameExist] = useState(false)

  const [validPassword, setValidPassword] = useState(false)

  const handleFieldChange = (e) => {
    const stateToChange = {...credentials}
    stateToChange[e.target.id] = e.target.value
    setCredentials(stateToChange)
  }

  const handleLogin = (e) => {
    e.preventDefault()

    DatabaseManager.findUserByUsername(credentials.username)
      .then(resUser => DatabaseManager.findUserByPassword(credentials.password).then(resPass => {
        if (credentials.username === "" || credentials.password === "") {
          setFieldsCompleted(false)
        } else if (resUser.length === 0) {
          setUsernameExist(true)
        } else if (resPass.length === 0) {
          setValidPassword(true)
          setUsernameExist(false)
        } else {
          setFieldsCompleted(true)
          setUsernameExist(false)
          setValidPassword(false)
          setUserAuth(resUser)
          props.history.push('/dashboard')
        }
      }))
  }

  return (
    <div className="login__container">
      <div className="login__title">
        <h3>Sign In to Deal Insight</h3>
      </div>
      <div className="login__form">
        <Form>
          <div className="alert alert-danger" role="alert" hidden={fieldsCompleted}>
            Please enter all fields
          </div>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input type="text" id="username" onChange={handleFieldChange} invalid={usernameExist} />
            <FormFeedback>Username doesn't exist</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" id="password" onChange={handleFieldChange} invalid={validPassword} />
            <FormFeedback>Invalid password entered</FormFeedback>
          </FormGroup>
          <div className="col text-center">
            <Button className="login__btn" onClick={handleLogin}>Sign In</Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login;