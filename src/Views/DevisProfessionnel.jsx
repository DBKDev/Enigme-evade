import React, { useState, useEffect } from 'react';
import '../Styles/DevisPro.css'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import contactService from '../Services/contactService';
import Modal from 'react-modal';
import escapeService from '../Services/escapeService';

const DevisProfessionnel = () => {

    const [nomDom, setNomDom] = useState([]);
    const [nomSite, setNomSite] = useState([]);

    const fetchNomDom = async () => {
        try {
            const response = await escapeService.getNomDomicile();
            //console.log(response.data);
            setNomDom(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchNomSite= async () => {
        try {
            const response = await escapeService.getNomSite();
            console.log(response.data);
            setNomSite(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const [formData, setFormData] = useState({
        escape_devis: '',
        difficulte_devis: '',
        nom_devis: '',
        prenom_devis: '',
        email_devis: '',
        lieu_devis: '',
        tel_devis: '',
        date_devis: '',
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
        };
        fetchNomDom();
        fetchNomSite();
    }, [successMessage]);

    //récupérer les données du formulaire et les envoyer au backend (à l'adresse mail)
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataWithEscapeAndDifficulty = {
                ...formData,
                escape_devis: document.getElementById('escapeGame').value,
                difficulte_devis: document.getElementById('difficulty').value,
            };

            const response = await contactService.sendEmailDevis(formDataWithEscapeAndDifficulty);
            console.log('Devis soumis avec succès!');

            // Réinitialiser le formulaire après la soumission réussie
            setFormData({
                escape_devis: '',
                difficulte_devis: '',
                nom_devis: '',
                prenom_devis: '',
                email_devis: '',
                lieu_devis: '',
                tel_devis: '',
                date_devis: '',
            });

            // Afficher la modal de succès
            setSuccessMessage('Le devis a été soumis avec succès!');
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

    return (<>

        <Header />
        <div className="divProMargin">
            <h2>DEVIS PROFESSIONNEL</h2>
            <div className="devisProSouligne"></div>
        </div>
        <div className='devisProContainer'>
            <form className='devisProFlex' onSubmit={handleSubmit}>
                <select id="escapeGame">
                    <option value={formData.difficulte_devis} disabled selected>Choisissez votre escape Game</option>
                    <optgroup label="Domicile">
                        {nomDom.map((dom) => (
                            <option key={dom.value} value={dom.value}>
                                {dom.dom_nom}
                            </option>
                        ))};
                    </optgroup>
                    <optgroup label="Sur Site">
                    {nomSite.map((site) => (
                            <option key={site.value} value={site.value}>
                                {site.salle_nom}
                            </option>
                        ))};
                    </optgroup>
                </select>


                <select id="difficulty">
                    <option value={formData.difficulte_devis} disabled selected>Choisissez votre difficulté</option>
                    <option value="facile">Facile</option>
                    <option value="intermediaire">Intermédiaire</option>
                    <option value="difficile">Difficile</option>
                </select>
                <div className='nomPrenomDevisPro'>
                    <input type="text" placeholder='Nom' name='nom_devis' value={formData.nom_devis} onChange={handleChange} />
                    <input type="text" placeholder='Prénom' name='prenom_devis' value={formData.prenom_devis} onChange={handleChange} />
                </div>
                <input type="email" placeholder='Adresse email' name='email_devis' value={formData.email_devis} onChange={handleChange} />
                <input type="text" placeholder="Lieu de l'événement" name='lieu_devis' value={formData.lieu_devis} onChange={handleChange} />
                <input type="number" placeholder='Numéro de téléphone' name='tel_devis' maxLength={'10'} value={formData.tel_devis} onChange={handleChange} />
                <input type="date" placeholder='Date souhaitée' name='date_devis' value={formData.date_devis} onChange={handleChange} />

                <input type="submit" value={'ENVOYER'} />
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

        <Footer />
    </>);
}

export default DevisProfessionnel;