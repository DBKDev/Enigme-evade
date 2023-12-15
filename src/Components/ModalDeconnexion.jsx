// Modal.js
import React from 'react'
import "../Styles/Modal.css";

//Création d'un modal (pop up) pour confirmer ou non une deconnexion
const ModalDeco = ({ onConfirm, onCancel }) => {
  return (
    <div className="modal">
      <div className="modal-content-deco">
        <p className='modal-header'>Etes-vous sûr(e) de vouloir vous déconnecter?</p>
        <div className='modal-buttons-deco'>
          {/* Si on clique sur oui, on ferme et déconnecte le modal */}
        <button className="modal-btn-deco"onClick={onConfirm}>Oui</button>
        {/* Si on clique sur non, on ferme juste le modal */}
        <button className="modal-btn-deco" onClick={onCancel}>Non</button>
        </div>
      </div>
    </div>
  );
};

export default ModalDeco;