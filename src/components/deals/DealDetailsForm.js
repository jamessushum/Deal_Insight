import React, { useState, useEffect } from 'react';
import DatabaseManager from '../../modules/DatabaseManager';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import './DealDetailsForm.css';

const DealDetailsForm = ({...props}) => {
  const [propertyTypes, setPropertyTypes] = useState([])
  const [propertyClass, setPropertyClass] = useState([])
  const [processStage, setProcessStage] = useState([])
  const [dealStatus, setDealStatus] = useState([])
  const [users, setUsers] = useState([])
  const [formFeedback, setFormFeedback] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [deal, setDeal] = useState({
    dealName: "",
    address: "",
    propertyId: "",
    classId: "",
    stageId: "",
    statusId: "",
    squareFeet: "",
    contact: "",
    initialPrice: "",
    initialCapRate: "",
    bidPrice: "",
    closingDate: "",
    notes: "",
    images: "",
    userId: "",
    id: ""
  })
  const [selectedImages, setSelectedImages] = useState([])
  const [isImageLoading, setIsImageLoading] = useState(false)

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

  const getSelectedDeal = async () => {
    const res = await DatabaseManager.getSingleDeal(props.match.params.dealId)
    setDeal(res)
    setSelectedImages(res.images)
  }

  const handleFieldChange = (e) => {
    const stateToChange = {...deal}
    stateToChange[e.target.id] = e.target.value
    setDeal(stateToChange)
  }

  const handleSave = (e) => {
    e.preventDefault()

    const editedDeal = {
      dealName: deal.dealName,
      address: deal.address,
      propertyId: parseInt(deal.propertyId),
      classId: parseInt(deal.classId),
      stageId: parseInt(deal.stageId),
      statusId: parseInt(deal.statusId),
      squareFeet: deal.squareFeet,
      contact: deal.contact,
      initialPrice: deal.initialPrice,
      initialCapRate: deal.initialCapRate,
      bidPrice: deal.bidPrice,
      closingDate: deal.closingDate,
      notes: deal.notes,
      images: selectedImages,
      userId: parseInt(deal.userId),
      id: props.match.params.dealId
    }

    if (deal.dealName === "" || deal.propertyId === "" || deal.classId === "" || deal.stageId === "" || deal.statusId === "" || deal.userId === "") {
      setFormFeedback(true)
    } else {
      setIsLoading(true)
      DatabaseManager.updateDeal(editedDeal)
        .then(() => props.history.push('/deals'))
    }
  }

  // Handles image upload using cloudinary, makes copy of current state and adds new url
  const handleFileSelected = async (e) => {
    const files = e.target.files
    setIsImageLoading(true)
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'flyingboar')
    const res = await fetch('https://api.cloudinary.com/v1_1/diswqnkzl/image/upload', {
      method: "POST",
      body: data
    })
    const file = await res.json()
    const currentStateCopy = [...selectedImages]
    currentStateCopy.push(file.secure_url)
    setSelectedImages(currentStateCopy)
    setIsImageLoading(false)
  }

  useEffect(() => {
    getPropertyTypes()
    getPropertyClasses()
    getProcessStages()
    getDealStatuses()
    getUsers()
    getSelectedDeal().then(() => setIsLoading(false))
  }, [])
  
  return (
    <>
      <div className="addDeal__mainContainer">
      <div className="addDeal__title">
        <h4>Deal Details</h4>
      </div>
      <div className="addDeal__container">
        <div className="addDeal__formLeft">
          <Form>
            {/* Deal Name */}
            <FormGroup>
              <Label for="dealName" className="bold">Deal Name</Label>
              <Input type="text" id="dealName" onChange={handleFieldChange} invalid={formFeedback} value={deal.dealName} />
              <FormFeedback>Required before proceeding</FormFeedback>
            </FormGroup>
            {/* Address */}
            <FormGroup>
              <Label for="address" className="bold">Address</Label>
              <Input type="text" id="address" onChange={handleFieldChange} value={deal.address} />
            </FormGroup>
            {/* Property Type */}
            <FormGroup>
              <Label for="propertyId" className="bold">Property Type</Label>
              <Input type="select" id="propertyId" onChange={handleFieldChange} invalid={formFeedback} value={deal.propertyId}>
                <option value="" disabled>Select Property Type</option>
                {propertyTypes.map(property => <option key={property.id} value={property.id}>{property.type}</option>)}
              </Input>
              <FormFeedback>Required before proceeding</FormFeedback>
            </FormGroup>
            {/* Rentable SqFt */}
            <FormGroup>
              <Label for="squareFeet" className="bold">Rentable SqFt.</Label>
              <Input type="text" id="squareFeet" onChange={handleFieldChange} value={deal.squareFeet} />
            </FormGroup>
            {/* Property Class */}
            <FormGroup>
              <Label for="classId" className="bold">Property Class</Label>
              <Input type="select" id="classId" onChange={handleFieldChange} invalid={formFeedback} value={deal.classId}>
                <option value="" disabled>Select Property Class</option>
                {propertyClass.map(propClass => <option key={propClass.id} value={propClass.id}>{propClass.class}</option>)}
              </Input>
              <FormFeedback>Required before proceeding</FormFeedback>
            </FormGroup>
            {/* Stage */}
            <FormGroup>
              <Label for="stageId" className="bold">Stage</Label>
              <Input type="select" id="stageId" onChange={handleFieldChange} invalid={formFeedback} value={deal.stageId}>
                <option value="" disabled>Select Stage</option>
                {processStage.map(stage => <option key={stage.id} value={stage.id}>{stage.stage}</option>)}
              </Input>
              <FormFeedback>Required before proceeding</FormFeedback>
            </FormGroup>
            {/* Status */}
            <FormGroup>
              <Label for="statusId" className="bold">Deal Status</Label>
              <Input type="select" id="statusId" onChange={handleFieldChange} invalid={formFeedback} value={deal.statusId}>
                <option value="" disabled>Select Status</option>
                {dealStatus.map(status => <option key={status.id} value={status.id}>{status.status}</option>)}
              </Input>
              <FormFeedback>Required before proceeding</FormFeedback>
            </FormGroup>
            {/* Image Upload */}
            <FormGroup>
              <Label for="images" className="bold">Upload Images</Label>
              <Input type="file" id="images" onChange={handleFileSelected} />
            </FormGroup>
          </Form>
        </div>
        <div className="addDeal__formRight">
        <Form>
            {/* Assign Team Member */}
            <FormGroup>
              <Label for="userId" className="bold">Assign Team Member</Label>
              <Input type="select" id="userId" onChange={handleFieldChange} invalid={formFeedback} value={deal.userId}>
                <option value="" disabled>Select Name</option>
                {users.map(user => <option key={user.id} value={user.id}>{user.firstName} {user.lastName}</option>)}
              </Input>
              <FormFeedback>Required before proceeding</FormFeedback>
            </FormGroup>
            {/* Closing Date */}
            <FormGroup>
              <Label for="closingDate" className="bold">Closing Date</Label>
              <Input type="date" id="closingDate" onChange={handleFieldChange} value={deal.closingDate} />
            </FormGroup>
            {/* Point of Contact */}
            <FormGroup>
              <Label for="contact" className="bold">Point of Contact</Label>
              <Input type="text" id="contact" onChange={handleFieldChange} value={deal.contact} />
            </FormGroup>
            {/* Initial Price */}
            <FormGroup>
              <Label for="initialPrice" className="bold">Initial Price</Label>
              <Input type="text" id="initialPrice" onChange={handleFieldChange} value={deal.initialPrice} />
            </FormGroup>
            {/* Initial Cap Rate */}
            <FormGroup>
              <Label for="initialCapRate" className="bold">Initial Cap Rate</Label>
              <Input type="text" id="initialCapRate" onChange={handleFieldChange} value={deal.initialCapRate} />
            </FormGroup>
            {/* Bid Price */}
            <FormGroup>
              <Label for="bidPrice" className="bold">Bid Price</Label>
              <Input type="text" id="bidPrice" onChange={handleFieldChange} value={deal.bidPrice} />
            </FormGroup>
            {/* Notes */}
            <FormGroup>
              <Label for="notes" className="bold">Notes</Label>
              <Input type="textarea" id="notes" onChange={handleFieldChange} value={deal.notes} />
            </FormGroup>
            <div className="addDeal__submitBtn">
              <Button color="info" disabled={isLoading} onClick={handleSave}>Save Changes</Button>
            </div>
          </Form>
        </div>
      </div>
      <div className="addDeal__imagesTitle">
        <h4>Images</h4>
      </div>
      <div className="addDeal__images">
        {isImageLoading ? <h5>Loading...</h5> : selectedImages.map(url => <img src={url} key={url} alt={url} className="image" />)}
      </div>
      </div>
    </>
  )
}

export default DealDetailsForm;