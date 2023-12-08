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
            <p className='domicile-tous-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis in lectus ligula. Donec tincidunt a massa sit amet finibus.
                Nunc scelerisque aliquet feugiat. Vestibulum nec lectus sed nibh iaculis
                vehicula vel eu risus. Suspendisse rutrum ac arcu id ultricies.
                Quisque suscipit diam massa, a placerat tellus varius vel. Sed maximus
                auctor vestibulum. </p>
            <div className="domicile-espace-card">
                <div className='domicile-tous-icon'>
                    <div className="item1"><img src={process.env.PUBLIC_URL + "/Images/icon-famille.png"} alt="" />
                        <p className='domicile-nbpers-tous'>FAMILLE & AMIS</p>
                        <p className='domicile-prixpers-tous'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in lectus ligula.
                            Donec tincidunt a massa sit amet finibus. </p>
                    </div>
                    <div className="item2"><img src={process.env.PUBLIC_URL + "/Images/icon-entreprise.png"} alt="" />
                        <p className='domicile-nbpers-tous'>ENTREPRISES</p>
                        <p className='domicile-prixpers-tous'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in lectus ligula.
                            Donec tincidunt a massa sit amet finibus. </p>
                    </div>
                </div>
            </div>
        </div>

        {/* TARIFS DOMICILE */}


        <div className="domicilet-escape-tarif">
            <div className='domicilet-tarif-titre'>
                <h1 className="domicilet-tarif-infos">LES TARIFS</h1>
                <div className="domicilet-tarif-barre"></div>
            </div>
        </div>
        <div className="domicilet-tarif-card">
            <p className='domicilet-tarif-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis in lectus ligula. Donec tincidunt a massa sit amet finibus.
                Nunc scelerisque aliquet feugiat. Vestibulum nec lectus sed nibh iaculis
                vehicula vel eu risus. Suspendisse rutrum ac arcu id ultricies.
                Quisque suscipit diam massa, a placerat tellus varius vel. Sed maximus
                auctor vestibulum. </p>
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
            <p className='domicile-tous-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis in lectus ligula. Donec tincidunt a massa sit amet finibus.
                Nunc scelerisque aliquet feugiat. Vestibulum nec lectus sed nibh iaculis
                vehicula vel eu risus. Suspendisse rutrum ac arcu id ultricies.
                Quisque suscipit diam massa, a placerat tellus varius vel. Sed maximus
                auctor vestibulum. </p>
            <div className="domicile-espace-card">
                <div className='domicile-tous-icon'>
                    <div className="item1">
                        <p className='domicileacti-nbpers-tous'>PARTICULIERS</p>
                        <p className='domicile-prixpers-tous'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in lectus ligula. </p>
                        <button type="button" className='domicile-btn-reserver'><a href="/reservationDomicile" className='laclasse-btn-a'>RÉSERVER</a></button>
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
                <p className='domicile-pro-tous-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis in lectus ligula. Donec tincidunt a massa sit amet finibus.
                    Nunc scelerisque aliquet feugiat. Vestibulum nec lectus sed nibh iaculis
                    vehicula vel eu risus. Suspendisse rutrum ac arcu id ultricies.
                    Quisque suscipit diam massa, a placerat tellus varius vel. Sed maximus
                    auctor vestibulum. </p>
            </div>
        </div>

        <div className="domicile-espace-card">
                <div className='domicile-tous-icon'>
                    <div className="item1">
                        <p className='domicileacti-nbpers-tous'>ENTREPRISES</p>
                        <p className='domicile-prixpers-tous'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in lectus ligula. </p>
                        <button type="button" className='domicile-btn-devis'><a href="/devisPro" className='laclasse-btn-a'>DEVIS</a></button>
                    </div>
                </div>
            </div>

            <Footer />
    </>;
}

export default PageDomicile;