import React, { useState } from 'react';
import { Modal } from 'angie-modale';
import 'angie-modale/dist/modal.css';

const SuccessModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Ouvrir la Modale</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>Contenu de la modale</h2>
        <p>Ceci est une modale réutilisable !</p>
      </Modal>
    </div>
  );
};

export default SuccessModal;
