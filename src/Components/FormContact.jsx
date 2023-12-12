import React, { useState, useEffect } from 'react';
import '../Styles/FormContact.css'
import Header from './Header';
import contactService from '../Services/contactService';
import axios from 'axios';
import Modal from 'react-modal';
import Map from '../Components/Map';
import MapContact from '../Components/Map';

Modal.setAppElement('#root');


const FormContact = () => {
    const [formData, setFormData] = useState({
        nom_contact: '',
        prenom_contact: '',
        email_contact: '',
        tel_contact: '',
        message_contact: '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    useEffect(() => {
        if (successMessage) {
            console.log('Success message:', successMessage);
            setIsModalOpen(true);
        }
    }, [successMessage]);

    //récupérer les données du formulaire et les envoyer au backend (à l'adresse mail)
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = contactService.sendEmailContact(formData);
            console.log('Formulaire soumis avec succès!');
            // Réinitialiser le formulaire après la soumission réussie
            setFormData({
                nom_contact: '',
                prenom_contact: '',
                email_contact: '',
                tel_contact: '',
                message_contact: '',
            });

            // Afficher la modal de succès
            setSuccessMessage('Le formulaire a été soumis avec succès!');
            setIsModalOpen(true);
            console.log('Success message:', successMessage); // Ajoutez cette ligne pour vérifier le succès du message
        } catch (error) {
            console.error('Erreur lors de la soumission du formulaire', error);
            setSuccessMessage("Une erreur s'est produite lors de la soumission du formulaire.");
            setIsModalOpen(true);
        }
    };

    //A l'appui du bouton OK
    const handleOkButtonClick = () => {
        //Si la pop-up modal est fermée
        setIsModalOpen(false);
        // Recharger la page
        window.location.reload();
    };

    return <>
        <div className="test">
            <div id='page_form_contact'>

                {/* PARTIE FORM CONTACT */}
                <div className='contact_container'>

                    <div className='contact_titre'>
                        <div className='header_titre'>

                            <h1 className='titre_contact'>CONTACT</h1>

                            <div className='separation_contact'></div>
                        </div>
                    </div>

                    <div className='contact_form_container'>
                        <div className='form_contact'>
                            {/* <form action="/submit" method="post" className="contact"> */}
                            <form onSubmit={handleSubmit} className='contact'>
                                <input
                                    className="input_contact"
                                    type="text"
                                    name="nom_contact"
                                    id="nom_contact"
                                    placeholder="NOM"
                                    value={formData.nom_contact}
                                    onChange={handleChange}
                                />
                                <br />
                                <input
                                    className="input_contact"
                                    type="text"
                                    name="prenom_contact"
                                    id="prenom_contact"
                                    placeholder="Prénom"
                                    value={formData.prenom_contact}
                                    onChange={handleChange}
                                />
                                <br />
                                <input
                                    className="input_contact"
                                    type="text"
                                    name="email_contact"
                                    id="email_contact"
                                    placeholder="Adresse mail"
                                    value={formData.email_contact}
                                    onChange={handleChange}
                                />
                                <br />
                                <input
                                    className="input_contact"
                                    type="text"
                                    name="tel_contact"
                                    id="tel_contact"
                                    placeholder="Téléphone"
                                    value={formData.tel_contact}
                                    onChange={handleChange}
                                />
                                <br />
                                <textarea
                                    className="textarea_contact"
                                    name="message_contact"
                                    id="message_contact"
                                    placeholder="Une question ou une suggestion?"
                                    value={formData.message_contact}
                                    onChange={handleChange}
                                ></textarea>
                                <br />
                                <button className="bouton_contact" type="submit">ENVOYER</button>
                            </form>

                            <Modal
                                isOpen={isModalOpen}
                                onRequestClose={() => setIsModalOpen(false)}
                                className={isModalOpen ? 'modal-visible' : 'modal-hidden'}
                            >
                                <p>{successMessage}</p>
                                <button onClick={handleOkButtonClick} className='modalOK'>OK</button>
                            </Modal>
                        </div>
                    </div>
                </div>


                {/* PARTIE MAP */}

                <div className='map_container'>

                    <div className='map_titre'>
                        <div className='header_map'>

                            <h1 className='titre_map'>VENEZ NOUS RENCONTRER</h1>

                            <div className='separation_map'></div>
                        </div>
                    </div>

                    <div className='info_adresse_container'>
                        <div className='adresse_container'>
                            <p><span className='text_map'> Adresse : 46 rue faidherbe - Lille (59350)</span></p>
                            <p><span className='text_map'>Numéro : 0666666666</span></p>
                            <p><span className='text_map'>Mail : tbialasik@fcdigital.fr</span></p>
                            <p><span className='text_map'>Horaires : 9h-12h / 14h-00h</span></p>
                        </div>

                        <div className='map_google'>
                            {/* <img className='map_google_image' src={process.env.PUBLIC_URL + "/Images/map.png"} alt="" /> */}
                            <MapContact/>
                        </div>
                    </div>
                </div>


            </div>
            </div>

        </>;
}

        export default FormContact;