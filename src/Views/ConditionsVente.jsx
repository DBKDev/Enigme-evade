import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/Mentions.css"

const ConditionsVente = () => {
    return <>
        <Header />
        <div className='Bloc-content'>
            <div className='content-mentions'>
                <h1 className='Titre-mentions'>Conditions de Vente</h1>

                <p>Merci de lire attentivement nos conditions de vente avant de passer commande sur le site d'Énigmes Évadées.
                    En effectuant un achat, vous acceptez les termes et conditions énoncés ci-dessous.</p>

                <h2>1. Commandes et Paiements</h2>

                <p>En passant commande sur notre site, vous confirmez que vous êtes légalement capable de conclure des contrats
                    et que toutes les informations que vous fournissez lors du processus de commande sont véridiques et exactes.
                    Les paiements peuvent être effectués par carte de crédit, virement bancaire ou [autres modes de paiement acceptés].
                    La commande ne sera traitée qu'après réception du paiement.</p>
                <br />
                <h2>2. Politique de Remboursement</h2>

                <p>Nous sommes déterminés à fournir des produits de qualité. Si, pour une raison quelconque,
                    vous n'êtes pas satisfait de votre achat, veuillez nous contacter dans les 30 jours
                    suivant la réception du produit. Nous vous fournirons des instructions sur le retour du produit et procéderons au remboursement
                    après réception du produit retourné conformément à notre politique de retour.</p>
                <br />
                <h2>3. Responsabilité</h2>

                <p>Nous nous engageons à assurer la qualité de nos produits, mais nous déclinons toute responsabilité en cas de dommages
                    résultant d'une utilisation inappropriée ou contraire aux instructions fournies. Veuillez lire attentivement toutes les informations
                    et instructions fournies avec nos produits.</p>
                <br />
                <h2>4. Modifications des Conditions</h2>

                <p>Nous nous réservons le droit de modifier ces conditions de vente à tout moment. Les modifications seront publiées sur notre site.
                    Il est de votre responsabilité de consulter régulièrement nos conditions de vente pour être informé des éventuelles mises à jour.</p>
                <br />
                <h2>5. Contact</h2>

                <p>Pour toute question ou préoccupation concernant nos conditions de vente,
                    veuillez nous contacter à l'adresse e-mail suivante : <a href="mailto:tbialasik@fcdigital.fr">tbialasik@fcdigital.fr</a>.</p>

            </div>
        </div>

        <Footer />

    </>;
}

export default ConditionsVente;