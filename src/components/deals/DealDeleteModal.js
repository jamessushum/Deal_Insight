import React from 'react';
import DatabaseManager from '../../modules/DatabaseManager';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DealDeleteModal = ({dealToDelete, modal, toggle, getActiveDeals, getClosedDeals, getLostDeals}) => {
  const handleDelete = (e) => {
    e.preventDefault()

    DatabaseManager.deleteDeal(dealToDelete.id)
      .then(() => {
        toggle()
        getActiveDeals()
        getClosedDeals()
        getLostDeals()
      })
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className="dealDeleteModal">
        <ModalHeader toggle={toggle}>Delete Deal</ModalHeader>
        <ModalBody>
          Are you sure you want to delete <b>{dealToDelete.dealName}</b>?
        </ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={handleDelete}>Delete</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default DealDeleteModal;