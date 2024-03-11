import React, { useState } from 'react';
import Modal from './Modal'; // Assuming you have a Modal component
import './Contact.css'
const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className='contact-body'>
      <h2>Контактная информация</h2>
      <p>
        Для связи с нами, пожалуйста, используйте следующую информацию:
      </p>
      <button className="button-contact" onClick={toggleModal}>Связаться с нами</button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <h2>Контактная информация</h2>
          <p>Email: milenaragulina@hotmail.com</p>
          <p>Телефон: +79256141233</p>
        </Modal>
      )}
      <p>Пожалуйста, свяжитесь с нами по любым вопросам!</p>
      
    </div>
  );
};

export default Contact;
