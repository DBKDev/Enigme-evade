import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/Mentions.css"
import { Link } from 'react-router-dom';



const MentionsLegal = () => {
    return <>

        <Header />
        <div className='Bloc-content'>
            <div className='content-mentions'>
                <h1 className='Titre-mentions'>Mentions Légales</h1>

                <h2>Énigmes Évadées</h2>

                <p>Siège social : 46 rue Faidherbe, Lille (59350), France</p>
                <p>Numéro de téléphone : 0666666666</p>
                <p>E-mail de contact : <a href="mailto:thbialasik@fcdigital.fr">thbialasik@fcdigital.fr</a></p>

                <p>Représentant légal : [Nom du représentant légal]</p>

                <p>Immatriculée au Registre du Commerce et des Sociétés de [Ville] sous le numéro [Numéro d'immatriculation], le [Date d'immatriculation].</p>
                <br></br>

                <h2>Hébergeur du site</h2>

                <p>[Nom de l'hébergeur]</p>
                <p>Adresse de l'hébergeur : [Adresse de l'hébergeur]</p>
                <p>Numéro de téléphone de l'hébergeur : [Numéro de téléphone de l'hébergeur]</p>

                <br></br>

                <h2>Politique de confidentialité</h2>

                <p>[Inclure ici le lien vers votre politique de confidentialité ou rédiger une brève description de votre politique de confidentialité.]</p>

                <br></br>

                <h2>Loi applicable</h2>

                <p>Le présent site est soumis à la loi française. Tout litige découlant de l'utilisation du site sera soumis à la juridiction exclusive des tribunaux français.</p>
            <br />
                <Link to="/PolitiqueConfidentialite" className='laclasse-a'>En voir plus sur notre Politique de Confidentialité</Link>
            
            </div>
        </div>
        <Footer />

    </>;
}

export default MentionsLegal;