// Modal.js
import React from 'react'
import "../Styles/Modal.css";

const ModalDeco = ({ onConfirm, onCancel }) => {
  return (
    <div className="modal">
      <div className="modal-content-deco">
        <p className='modal-header'>Etes-vous sûr(e) de vouloir vous déconnecter?</p>
        <div className='modal-buttons-deco'>
        <button className="modal-btn-deco"onClick={onConfirm}>Oui</button>
        <button className="modal-btn-deco" onClick={onCancel}>Non</button>
        </div>
      </div>
    </div>
  );
};

export default ModalDeco;