import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/Mentions.css"

const PolitiqueConfidentialité = () => {
    return <>

        <Header />
        <div className='Bloc-content'>
            <div className='content-mentions'>
                <h1 className='Titre-mentions'>Politique de Confidentialité</h1>

                <p>La présente politique de confidentialité définit la manière dont Énigmes Évadées utilise et protège
                    les informations que vous fournissez lors de l'utilisation de ce site.</p>
                <br />
                <h2>Collecte des Informations</h2>

                <p>Nous collectons des informations personnelles lorsque vous remplissez un formulaire sur notre site.
                    Ces informations peuvent inclure votre nom, votre adresse e-mail, votre numéro de téléphone, etc.</p>
                <br />
                <h2>Utilisation des Informations</h2>

                <p>Les informations que nous collectons sont utilisées pour comprendre vos besoins et vous fournir un meilleur service.
                    Nous pouvons utiliser ces informations pour :</p>

                <ul>
                    <li>Personnaliser votre expérience sur notre site</li>
                    <li>Améliorer notre site en fonction de vos commentaires</li>
                    <li>Vous envoyer des informations promotionnelles par e-mail, si vous avez consenti à les recevoir</li>
                </ul>
                <br />
                <h2>Sécurité</h2>

                <p>Nous nous engageons à assurer la sécurité de vos informations. Pour prévenir tout accès non autorisé ou divulgation,
                    nous avons mis en place des procédures physiques, électroniques et de gestion appropriées pour protéger
                    les informations que nous collectons en ligne.</p>
                <br />
                <h2>Cookies</h2>

                <p>Notre site utilise des cookies pour améliorer l'expérience utilisateur. Vous pouvez choisir d'accepter ou de refuser
                    les cookies en modifiant les paramètres de votre navigateur.</p>
                <br />
                <h2>Divulgation à des Tiers</h2>

                <p>Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles identifiables à des tiers. Cela n'inclut pas
                    les tiers de confiance qui nous aident à exploiter notre site ou à mener nos activités, tant que ces parties acceptent de
                    garder ces informations confidentielles.</p>
                <br />
                <h2>Modification de cette Politique</h2>

                <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications
                    seront publiées sur cette page.</p>

                <p>Si vous avez des questions concernant cette politique de confidentialité,
                    vous pouvez nous contacter à l'adresse e-mail suivante : <a href="mailto:thbialasik@fcdigital.fr">thbialasik@fcdigital.fr</a>.</p>
            </div>
        </div>
        <Footer />

    </>;
}

export default PolitiqueConfidentialité;