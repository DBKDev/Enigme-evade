import React, { useEffect, useState } from 'react';
import Slideaccueil from '../Components/Slideraccueil';
import Header from '../Components/Header';
import "../Styles/PageAccueil.css"
import Footer from '../Components/Footer';
import imageAccueil from '../Services/imageAccueil';
const PageAccueil = () => {

    const [images, setImages] = useState([]);
    const fetchImageAccueil = async () => {
        try {
            const response = await imageAccueil.getImageAccueil();
            setImages(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect (() => {
        fetchImageAccueil();
    },[]);
    return <>
        <Header />
        <Slideaccueil />
        <div id='escape-background'>
            <div className="PA-separation"></div>
            {/* Escape Game */}
            <div className="escape-game">
                <div className='escape-titre'>
                    <h1 className="escape-infos">ESCAPE GAME</h1>
                    <div className="escape-barre"></div>
                </div>
            </div>
            <div className="escape-card-jeu">
                <p className='escape-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis in lectus ligula. Donec tincidunt a massa sit amet finibus.
                    Nunc scelerisque aliquet feugiat. Vestibulum nec lectus sed nibh iaculis
                    vehicula vel eu risus. Suspendisse rutrum ac arcu id ultricies.
                    Quisque suscipit diam massa, a placerat tellus varius vel. Sed maximus
                    auctor vestibulum. </p>
                <div className="espace-card" >
                {images.map((image) => {
                        return (
                                <img src={process.env.PUBLIC_URL + `/Images/photos_escape/${image.image_nom}.png`} alt={image.alt} width={'300px'} height={'200px'} className='img-jeu' />
                        )
                    })}

                </div>
                   

            </div>
            {/* Tarif */}
            <div className="escape-tarif" id='Tarif'>
                <div className='tarif-titre' >
                    <h1 className="tarif-infos">LES TARIFS</h1>
                    <div className="tarif-barre"></div>
                </div>
            </div>
            <div className="tarif-card">
                <p className='tarif-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis in lectus ligula. Donec tincidunt a massa sit amet finibus.
                    Nunc scelerisque aliquet feugiat. Vestibulum nec lectus sed nibh iaculis
                    vehicula vel eu risus. Suspendisse rutrum ac arcu id ultricies.
                    Quisque suscipit diam massa, a placerat tellus varius vel. Sed maximus
                    auctor vestibulum. </p>
                <div className="espace-card-tarif">
                    <div className='taris-icon'>
                        <div className="item1"><img src={process.env.PUBLIC_URL + "/Images/logo_pers/3pers.png"} alt="" />
                            <p className='nbpers-tarif'>3 personnes</p>
                            <p className='prixpers-tarif'>40€/personne</p>
                        </div>
                        <div className="item2"><img src={process.env.PUBLIC_URL + "/Images/logo_pers/4pers.png"} alt="" />
                            <p className='nbpers-tarif'>3 personnes</p>
                            <p className='prixpers-tarif'>40€/personne</p>
                        </div>
                        <div className="item3"><img src={process.env.PUBLIC_URL + "/Images/logo_pers/5pers.png"} alt="" />
                            <p className='nbpers-tarif'>3 personnes</p>
                            <p className='prixpers-tarif'>40€/personne</p>
                        </div>
                        <div className="item4"><img src={process.env.PUBLIC_URL + "/Images/logo_pers/6pers.png"} alt="" />
                            <p className='nbpers-tarif'>3 personnes</p>
                            <p className='prixpers-tarif'>40€/personne</p>
                        </div>
                        <div className="item5"><img src={process.env.PUBLIC_URL + "/Images/logo_pers/7pers.png"} alt="" />
                            <p className='nbpers-tarif'>3 personnes</p>
                            <p className='prixpers-tarif'>40€/personne</p>
                        </div>
                        <div className="item6"><img src={process.env.PUBLIC_URL + "/Images/logo_pers/8pers.png"} alt="" />
                            <p className='nbpers-tarif'>3 personnes</p>
                            <p className='prixpers-tarif'>40€/personne</p>
                        </div>

                    </div>
                </div>
            </div>


            {/* Activité pour tous  */}

            <div className="escape-tous">
                <div className='tous-titre'>
                    <h1 className="tous-infos">UNE ACTIVITÉ ACCESSIBLE À TOUS !</h1>
                    <div className="tous-barre"></div>
                </div>
            </div>
            <div className="tous-card">
                <p className='tous-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis in lectus ligula. Donec tincidunt a massa sit amet finibus.
                    Nunc scelerisque aliquet feugiat. Vestibulum nec lectus sed nibh iaculis
                    vehicula vel eu risus. Suspendisse rutrum ac arcu id ultricies.
                    Quisque suscipit diam massa, a placerat tellus varius vel. Sed maximus
                    auctor vestibulum. </p>
                <div className="espace-card">
                    <div className='tous-icon'>
                        <div className="item1"><img src={process.env.PUBLIC_URL + "/Images/icon-famille.png"} alt="" />
                            <p className='nbpers-tous'>FAMILLE & AMIS</p>
                            <p className='prixpers-tous'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in lectus ligula.
                                Donec tincidunt a massa sit amet finibus. </p>
                        </div>
                        <div className="item2"><img src={process.env.PUBLIC_URL + "/Images/icon-entreprise.png"} alt="" />
                            <p className='nbpers-tous'>ENTREPRISES</p>
                            <p className='prixpers-tous'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in lectus ligula.
                                Donec tincidunt a massa sit amet finibus. </p>
                        </div>
                        <div className="item3"><img src={process.env.PUBLIC_URL + "/Images/icon-touriste.png"} alt="" />
                            <p className='nbpers-tous'>TOURISTES</p>
                            <p className='prixpers-tous'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in lectus ligula.
                                Donec tincidunt a massa sit amet finibus. </p>
                        </div>


                    </div>
                </div>
            </div>

{/* Lieux ouvert à tous */}
            <div className="escape-ouvert">
                <div className='ouvert-titre'>
                    <h1 className="ouvert-infos">LIEUX OUVERT À TOUS !</h1>
                    <div className="ouvert-barre"></div>
                </div>
            </div>
            <div className="ouvert-card">
                <p className='ouvert-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis in lectus ligula. Donec tincidunt a massa sit amet finibus.
                    Nunc scelerisque aliquet feugiat. Vestibulum nec lectus sed nibh iaculis
                    vehicula vel eu risus. Suspendisse rutrum ac arcu id ultricies.
                    Quisque suscipit diam massa, a placerat tellus varius vel. Sed maximus
                    auctor vestibulum. </p>
                <div className="espace-card">
                    <div className='ouvert-icon'>
                        <div className="item1"><img src={process.env.PUBLIC_URL + "/Images/icon-sourd.png"} alt="" /></div>
                        <div className="item2"><img src={process.env.PUBLIC_URL + "/Images/icon-enceinte.png"} alt="" /></div>
                        <div className="item3"><img src={process.env.PUBLIC_URL + "/Images/icon-fauteuil.png"} alt="" /></div>
                        <div className="item3"><img src={process.env.PUBLIC_URL + "/Images/icon-age.png"} alt="" /></div>
                    </div>
                </div>
            </div>


        <Footer/>
        </div>
        
    </>;
}

export default PageAccueil;