import React from 'react';
import { Modal } from 'angie-modale';
import 'angie-modale/dist/modal.css';

const ConfirmationModal = ({ isOpen, onClose }) => {
  return (
      <Modal isOpen={isOpen} onClose={onClose}>
          <div>
              <h2>Confirmation</h2>
              <p className='form_label'>Employee added successfully !</p>
          </div>
      </Modal>
  );
};

export default ConfirmationModal;