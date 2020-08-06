import React, { useState } from 'react';
import DatabaseManager from '../../modules/DatabaseManager';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import './Register.css'

const Register = ({setUserAuth, ...props}) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: ""
  })

  const [usernameTaken, setUsernameTaken] = useState(false)

  const [emailExists, setEmailExists] = useState(false)

  const [passwordMatch, setPasswordMatch] = useState(false)

  const [fieldsCompleted, setFieldsCompleted] = useState(true)

  const handleFieldChange = (e) => {
    const stateToChange = {...user}
    stateToChange[e.target.id] = e.target.value
    setUser(stateToChange)
  }

  const addNewUser = (e) => {
    e.preventDefault()

    const newUserObj = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
      password: user.password
    }

    // Invoking API methods getting user from database whose username and email matches those entered in the form fields. Then authenticates data points setting the appropriate state to toggle FormFeedback and alert.
    DatabaseManager.findUserByUsername(user.username)
      .then(resUser => DatabaseManager.findUserByEmail(user.email).then(resEmail => {
        if (resUser.length > 0) {
          setUsernameTaken(true)
        } else if (resEmail.length > 0) {
          setEmailExists(true)
          setUsernameTaken(false)
        } else if (user.password !== document.getElementById('confirm_password').value) {
          setPasswordMatch(true)
        } else if (user.firstName === "" || user.lastName === "" || user.email === "" || user.username === "" || user.password === "" || document.getElementById('confirm_password').value === "") {
          setFieldsCompleted(false)
        } else {
          setUsernameTaken(false)
          setEmailExists(false)
          setPasswordMatch(false)
          setFieldsCompleted(true)
          DatabaseManager.postNewUser(newUserObj)
            .then(() => props.history.push('/'))
        }
      }))
  }

  return (
    <div className="register__container">
      <div className="register__title">
        <h3>Register a New Account</h3>
      </div>
      <div className="register__form">
        <Form>
          <div className="alert alert-danger" role="alert" hidden={fieldsCompleted}>
            Please enter all fields
          </div>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input type="text" id="firstName" onChange={handleFieldChange} />
            <FormFeedback>Please enter all fields</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input type="text" id="lastName" onChange={handleFieldChange} />
            <FormFeedback>Please enter last name</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input type="text" id="username" onChange={handleFieldChange} invalid={usernameTaken} />
            <FormFeedback>Username already taken</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" id="email" onChange={handleFieldChange} invalid={emailExists} />
            <FormFeedback>Email already in use</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" id="password" onChange={handleFieldChange} />
            <FormFeedback>Please enter a password</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="confirm_password">Confirm Password</Label>
            <Input type="password" id="confirm_password" invalid={passwordMatch} />
            <FormFeedback>Passwords don't match</FormFeedback>
          </FormGroup>
          <div className="col text-center">
            <Button className="register__btn" onClick={addNewUser}>Submit</Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Register;