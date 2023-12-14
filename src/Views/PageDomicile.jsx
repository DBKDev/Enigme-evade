import React from 'react';
import Header from '../Components/Header';
import Sliderdomicile from '../Components/Sliderdomicile';
import "../Styles/PageDomicile.css"
import Footer from '../Components/Footer';

const PageDomicile = () => {
    return <>
        <Header />
        <Sliderdomicile />

        <div className="domicile-tous">
            <div className='domicile-tous-titre'>
                <h1 className="domicile-tous-infos">UNE ACTIVITÉ ACCESSIBLE À TOUS !</h1>
                <div className="domicile-tous-barre"></div>
            </div>
        </div>
        <div className="domicile-tous-card">
            <p className='domicile-tous-text'>Bienvenue à notre escape game à domicile, une activité captivante conçue exclusivement pour
                les familles, les amis et les entreprises. Cette expérience immersive a été créée pour être appréciée par tous, que ce soit lors
                de réunions familiales, entre amis en quête d'aventure ou dans le cadre d'un événement de renforcement d'équipe pour les
                entreprises. Plongez dans l'excitation de notre escape game à domicile, une opportunité de partage et de divertissement,
                adaptée à tous les groupes. Faites de votre espace un terrain de jeu pour des énigmes palpitantes et des moments mémorables
                entre vos proches et collègues. </p>
            <div className="domicile-espace-card">
                <div className='domicile-tous-icon'>
                    <div className="item1"><img src={process.env.PUBLIC_URL + "/Images/icon-famille.png"} alt="" />
                        <p className='domicile-nbpers-tous'>FAMILLE & AMIS</p>
                        <p className='domicile-prixpers-tous'>Explorez 'Énigmes Évasives' en famille avec des énigmes adaptées à tous les niveaux,
                            favorisant une résolution collective. Pour les amis en quête d'aventure ou les équipes expérimentées, nos missions
                            variées promettent divertissement et renforcement de l'esprit d'équipe. </p>
                    </div>
                    <div className="item2"><img src={process.env.PUBLIC_URL + "/Images/icon-entreprise.png"} alt="" />
                        <p className='domicile-nbpers-tous'>ENTREPRISES</p>
                        <p className='domicile-prixpers-tous'>L'escape game est l'outil de team-building par excellence. Renforcez les liens au
                            sein de votre équipe tout en stimulant la réflexion stratégique et la collaboration. Des missions personnalisées peuvent
                            être conçues pour répondre aux objectifs spécifiques de votre entreprise. </p>
                    </div>
                </div>
            </div>
        </div>

        {/* TARIFS DOMICILE */}


        <div className="domicilet-escape-tarif" >
            <div className='domicilet-tarif-titre'>
                <h1 className="domicilet-tarif-infos" id='Tarif'>LES TARIFS</h1>
                <div className="domicilet-tarif-barre"></div>
            </div>
        </div>
        <div className="domicilet-tarif-card">
            <p className='domicilet-tarif-text'>À "Énigmes évadées", nous croyons que chaque énigme résolue est une aventure partagée,
                et nous avons hâte de vous accueillir pour une expérience inoubliable pleine de mystères et de défis. Préparez-vous
                à explorer, réfléchir et vous échapper !
                Nos tarifs sont évolutifs en fonctions du nombre de joueurs ! </p>
            <div className="domicilet-espace-card">
                <div className='domicilet-taris-icon'>
                    <div className="item1"><img src={process.env.PUBLIC_URL + "/Images/logo_pers/3pers.png"} alt="" />
                        <p className='domicilet-nbpers-tarif'>3 personnes</p>
                        <p className='domicilet-prixpers-tarif'>80€/personne</p>
                    </div>
                    <div className="item2"><img src={process.env.PUBLIC_URL + "/Images/logo_pers/4pers.png"} alt="" />
                        <p className='domicilet-nbpers-tarif'>4 personnes</p>
                        <p className='domicilet-prixpers-tarif'>78€/personne</p>
                    </div>
                    <div className="item3"><img src={process.env.PUBLIC_URL + "/Images/logo_pers/5pers.png"} alt="" />
                        <p className='domicilet-nbpers-tarif'>5 personnes</p>
                        <p className='domicilet-prixpers-tarif'>75€/personne</p>
                    </div>
                    <div className="item4"><img src={process.env.PUBLIC_URL + "/Images/logo_pers/6pers.png"} alt="" />
                        <p className='domicilet-nbpers-tarif'>6 personnes</p>
                        <p className='domicilet-prixpers-tarif'>73€/personne</p>
                    </div>
                    <div className="item5"><img src={process.env.PUBLIC_URL + "/Images/logo_pers/7pers.png"} alt="" />
                        <p className='domicilet-nbpers-tarif'>7 personnes</p>
                        <p className='domicilet-prixpers-tarif'>70€/personne</p>
                    </div>
                    <div className="item6"><img src={process.env.PUBLIC_URL + "/Images/logo_pers/8pers.png"} alt="" />
                        <p className='domicilet-nbpers-tarif'>8 personnes</p>
                        <p className='domicilet-prixpers-tarif'>65€/personne</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Déroulé de l'activitée */}

        <div className="domicile-tous">
            <div className='domicile-tous-titre'>
                <h1 className="domicile-tous-infos">DÉROULÉ DE L’ACTIVITÉE</h1>
                <div className="domicile-tous-barre"></div>
            </div>
        </div>
        <div className="domicile-tous-card">
            <p className='domicile-tous-text'>Le déroulé de l'activité commence par l'arrivée de l'organisateur 1h30 avant
                le début du jeu, dédié à la préparation minutieuse des décors et des énigmes. Pendant ce temps, les invités
                peuvent profiter d'un apéro convivial, compris dans le prix du service. Ensuite, l'aventure prend vie avec
                une session de jeu immersive de 1h30, où les participants sont plongés dans l'intrigue captivante,
                prêts à résoudre des énigmes palpitantes et à vivre une expérience inoubliable. </p>
            <div className="domicile-espace-card">
                <div className='domicile-tous-icon'>
                    <div className="item1">
                        <p className='domicileacti-nbpers-tous'>PARTICULIERS</p>
                        <p className='domicile-prixpers-tous'>Vous êtes intéressé ? N'hésitez plus avant de réserver votre escape game à domicile ! </p>
                        <a href="/reservationDomicile" className='laclasse-btn-a'><button type="button" className='domicile-btn-reserver'>RÉSERVER</button></a>
                    </div>
                </div>
            </div>
        </div>


        <div className="domicile-pro">
            <div className="domicile-pro-tous">
                <div className='domicile-pro-tous-titre'>
                    <h1 className="domicile-pro-tous-infos">VOUS ÊTES PROFESSIONNEL</h1>
                    <div className="domicile-pro-tous-barre"></div>
                </div>
            </div>
            <div className="domicile-pro-tous-card">
                <p className='domicile-pro-tous-text'>Notre activité en entreprise, sur devis, se déroule ainsi :</p>
                    <ol>
                    <li className='domicile-pro-tous-text'><span className='domicile-bold-text'>1. Accueil et Briefing (30 min) :</span>
                        <br/>
                        Présentation des règles et des objectifs.</li>
                    <li className='domicile-pro-tous-text'><span className='domicile-bold-text'>2. Escape Game (90 min) :</span>
                        <br/>
                        Les équipes résolvent des énigmes pour renforcer la collaboration.</li>
                    <li className='domicile-pro-tous-text'><span className='domicile-bold-text'>3. Débriefing (30 min) :</span>
                    <br/>
                        Analyse des performances et discussion.
                    </li>
                    </ol>
                   <p className='domicile-pro-tous-text'> Contactez-nous pour un devis sur mesure et vivez une expérience de team-building unique ! </p>
            </div>
        </div>

        <div className="domicile-espace-card">
            <div className='domicile-tous-icon'>
                <div className="item1">
                    <p className='domicileacti-nbpers-tous'>ENTREPRISES</p>
                    <p className='domicile-prixpers-tous'>Vous êtes intéréssés pour renforcer le team-building dans votre entreprise ? Alors envoyez nous un devis dès maintenant ! </p>
                    <a href="/devisPro" className='laclasse-btn-a'><button type="button" className='domicile-btn-devis'>DEVIS</button></a>
                </div>
            </div>
        </div>

        <Footer />
    </>;
}

export default PageDomicile;