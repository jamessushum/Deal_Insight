import React, { useState, useEffect } from 'react';
import DatabaseManager from '../../modules/DatabaseManager';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './DealForm.css';

const DealForm = () => {
  const [propertyTypes, setPropertyTypes] = useState([])
  const [propertyClass, setPropertyClass] = useState([])
  const [processStage, setProcessStage] = useState([])
  const [dealStatus, setDealStatus] = useState([])
  const [users, setUsers] = useState([])

  const getPropertyTypes = async () => {
    const res = await DatabaseManager.getAllPropertyTypes()
    setPropertyTypes(res)
  }

  const getPropertyClasses = async () => {
    const res = await DatabaseManager.getAllPropertyClasses()
    setPropertyClass(res)
  }

  const getProcessStages = async () => {
    const res = await DatabaseManager.getAllStages()
    setProcessStage(res)
  }

  const getDealStatuses = async () => {
    const res = await DatabaseManager.getAllStatuses()
    setDealStatus(res)
  }

  const getUsers = async () => {
    const res = await DatabaseManager.getAllUsers()
    setUsers(res)
  }

  useEffect(() => {
    getPropertyTypes()
    getPropertyClasses()
    getProcessStages()
    getDealStatuses()
    getUsers()
  }, [])

  return (
    <>
      <div className="addDeal__title">
        <h4>Add New Deal</h4>
      </div>
      <div className="addDeal__container">
        <div className="addDeal__formLeft">
          <Form>
            {/* Deal Name */}
            <FormGroup>
              <Label for="dealName" className="bold">Deal Name</Label>
              <Input type="text" id="dealName" />
            </FormGroup>
            {/* Address */}
            <FormGroup>
              <Label for="address" className="bold">Address</Label>
              <Input type="text" id="address" />
            </FormGroup>
            {/* Property Type */}
            <FormGroup>
              <Label for="propertyId" className="bold">Property Type</Label>
              <Input type="select" id="propertyId" defaultValue="">
                <option value="" disabled>Select Property Type</option>
                {propertyTypes.map(property => <option key={property.id} value={property.id}>{property.type}</option>)}
              </Input>
            </FormGroup>
            {/* Rentable SqFt */}
            <FormGroup>
              <Label for="squareFeet" className="bold">Rentable SqFt.</Label>
              <Input type="text" id="squareFeet" />
            </FormGroup>
            {/* Property Class */}
            <FormGroup>
              <Label for="classId" className="bold">Property Class</Label>
              <Input type="select" id="classId" defaultValue="">
                <option value="" disabled>Select Property Class</option>
                {propertyClass.map(propClass => <option key={propClass.id} value={propClass.id}>{propClass.class}</option>)}
              </Input>
            </FormGroup>
            {/* Stage */}
            <FormGroup>
              <Label for="stageId" className="bold">Stage</Label>
              <Input type="select" id="stageId" defaultValue="">
                <option value="" disabled>Select Stage</option>
                {processStage.map(stage => <option key={stage.id} value={stage.id}>{stage.stage}</option>)}
              </Input>
            </FormGroup>
            {/* Status */}
            <FormGroup>
              <Label for="statusId" className="bold">Deal Status</Label>
              <Input type="select" id="statusId" defaultValue="">
                <option value="" disabled>Select Status</option>
                {dealStatus.map(status => <option key={status.id} value={status.id}>{status.status}</option>)}
              </Input>
            </FormGroup>
            {/* Image Upload */}
            <FormGroup>
              <Label for="images" className="bold">Upload Images</Label>
              <Input type="file" id="images" />
            </FormGroup>
          </Form>
        </div>
        <div className="addDeal__formRight">
        <Form>
            {/* Assign Team Member */}
            <FormGroup>
              <Label for="userId" className="bold">Assign Team Member</Label>
              <Input type="select" id="userId" defaultValue="">
                <option value="" disabled>Select Name</option>
                {users.map(user => <option key={user.id} value={user.id}>{user.firstName} {user.lastName}</option>)}
              </Input>
            </FormGroup>
            {/* Closing Date */}
            <FormGroup>
              <Label for="closingDate" className="bold">Closing Date</Label>
              <Input type="date" id="closingDate" />
            </FormGroup>
            {/* Point of Contact */}
            <FormGroup>
              <Label for="contact" className="bold">Point of Contact</Label>
              <Input type="text" id="contact" />
            </FormGroup>
            {/* Initial Price */}
            <FormGroup>
              <Label for="initialPrice" className="bold">Initial Price</Label>
              <Input type="text" id="initialPrice" />
            </FormGroup>
            {/* Initial Cap Rate */}
            <FormGroup>
              <Label for="initialCapRate" className="bold">Initial Cap Rate</Label>
              <Input type="text" id="initialCapRate" />
            </FormGroup>
            {/* Bid Price */}
            <FormGroup>
              <Label for="bidPrice" className="bold">Bid Price</Label>
              <Input type="text" id="bidPrice" />
            </FormGroup>
            {/* Notes */}
            <FormGroup>
              <Label for="notes" className="bold">Notes</Label>
              <Input type="textarea" id="notes" />
            </FormGroup>
            <div className="addDeal__submitBtn">
              <Button>Add Deal</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default DealForm;