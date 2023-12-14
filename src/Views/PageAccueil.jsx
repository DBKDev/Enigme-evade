import React, { useEffect, useState } from 'react';
import Slideaccueil from '../Components/Slideraccueil';
import Header from '../Components/Header';
import "../Styles/PageAccueil.css"
import Footer from '../Components/Footer';
import imageAccueil from '../Services/imageAccueil';
const PageAccueil = () => {

    const [images, setImages] = useState([]);

    // Affichage des images pour les 8 dernières nouveautées
    const fetchImageAccueil = async () => {
        try {
            const response = await imageAccueil.getImageAccueil();
            console.log(response.data);
            setImages(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchImageAccueil();
    }, []);

    // Divise le tableau en deux parties
    const imageDom = images.slice(0, 4);
    const imageSite = images.slice(4);


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
            <div className="escape-card">
                <p className='escape-text-jeu'>"Énigmes Évadées" a été créée avec une passion commune pour les défis intellectuels et les
                    aventures captivantes. Notre équipe dévouée travaille sans relâche pour concevoir des Escape Games
                    originaux, stimulants et divertissants qui transportent les participants dans des univers
                    extraordinaires
                </p>
                <div className="espace-card-jeu" >
                    {/* Les quatre premières images */}
                    {imageDom.map((image, index) => (
                        <div key={index} className="card">
                            <a href={`/domicile/${image.domicile_id}`}>
                                <img src={process.env.PUBLIC_URL + `/Images/photos_escape/${image.image_nom}.png`} alt={image.alt} width={'300px'} height={'200px'} className='img-jeu' />
                            </a>
                        </div>
                    ))}

                    {/* Les autres images */}
                    {imageSite.map((image, index) => (
                        <div key={index} className="card-dom">
                            <a href={`/site/${image.salle_id}`}>
                                <img src={process.env.PUBLIC_URL + `/Images/photos_escape/${image.image_nom}.png`} alt={image.alt} width={'300px'} height={'200px'} className='img-jeu' />
                            </a>
                        </div>
                    ))}
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
                <p className='tarif-text'>À "Énigmes évadées", nous croyons que chaque énigme résolue est une aventure partagée, 
                et nous avons hâte de vous accueillir pour une expérience inoubliable pleine de mystères et de défis. Préparez-vous 
                à explorer, réfléchir et vous échapper !
                Nos tarifs sont évolutifs en fonctions du nombre de joueurs !</p>
                <div className="espace-card">
                    <div className='taris-icon'>

                        <div className="item1"><img src={process.env.PUBLIC_URL + "/Images/logo_pers/3pers.png"} alt="" />
                            <p className='nbpers-tarif'>3 personnes</p>
                            <p className='prixpers-tarif'>40€/personne</p>
                        </div>
                        <div className="item2"><img src={process.env.PUBLIC_URL + "/Images/logo_pers/4pers.png"} alt="" />
                            <p className='nbpers-tarif'>4 personnes</p>
                            <p className='prixpers-tarif'>38€/personne</p>
                        </div>
                        <div className="item3"><img src={process.env.PUBLIC_URL + "/Images/logo_pers/5pers.png"} alt="" />
                            <p className='nbpers-tarif'>5 personnes</p>
                            <p className='prixpers-tarif'>35€/personne</p>
                        </div>
                        <div className="item4"><img src={process.env.PUBLIC_URL + "/Images/logo_pers/6pers.png"} alt="" />
                            <p className='nbpers-tarif'>6 personnes</p>
                            <p className='prixpers-tarif'>33€/personne</p>
                        </div>
                        <div className="item5"><img src={process.env.PUBLIC_URL + "/Images/logo_pers/7pers.png"} alt="" />
                            <p className='nbpers-tarif'>7 personnes</p>
                            <p className='prixpers-tarif'>30€/personne</p>
                        </div>
                        <div className="item6"><img src={process.env.PUBLIC_URL + "/Images/logo_pers/8pers.png"} alt="" />
                            <p className='nbpers-tarif'>8 personnes</p>
                            <p className='prixpers-tarif'>28€/personne</p>
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
                <p className='tous-text'>Bienvenue chez "Énigmes Évadées", l'endroit où l'aventure et l'excitation sont à la 
                portée de tous ! Que vous soyez en famille, entre amis, en voyage d'affaires ou simplement en exploration 
                touristique, notre escape game est une expérience captivante conçue pour satisfaire les esprits curieux de tous âges
                et horizons. </p>
                <div className="espace-card">
                    <div className='tous-icon'>
                        <div className="item1"><img src={process.env.PUBLIC_URL + "/Images/icon-famille.png"} alt="" />
                            <p className='nbpers-tous'>FAMILLE & AMIS</p>
                            <p className='prixpers-tous'>Explorez 'Énigmes Évasives' en famille avec des énigmes adaptées à tous les niveaux, 
                            favorisant une résolution collective. Pour les amis en quête d'aventure ou les équipes expérimentées, nos missions 
                            variées promettent divertissement et renforcement de l'esprit d'équipe.</p>
                        </div>
                        <div className="item2"><img src={process.env.PUBLIC_URL + "/Images/icon-entreprise.png"} alt="" />
                            <p className='nbpers-tous'>ENTREPRISES</p>
                            <p className='prixpers-tous'>L'escape game est l'outil de team-building par excellence. Renforcez les liens au 
                            sein de votre équipe tout en stimulant la réflexion stratégique et la collaboration. Des missions personnalisées peuvent 
                            être conçues pour répondre aux objectifs spécifiques de votre entreprise. </p>
                        </div>
                        <div className="item3"><img src={process.env.PUBLIC_URL + "/Images/icon-touriste.png"} alt="" />
                            <p className='nbpers-tous'>TOURISTES</p>
                            <p className='prixpers-tous'>Explorez la ville d'une manière unique en plongeant dans l'univers captivant 
                            de "Énigmes Évadées". Une activité divertissante et mémorable qui vous permettra de découvrir la culture 
                            locale tout en mettant vos compétences à l'épreuve.</p>
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
                <p className='ouvert-text'>Notre lieu se veut chaleureux et accueillant, conçu pour être ouvert à tous. Que vous soyez accompagné 
                de vos proches, entre amis ou en solo, notre espace a été pensé avec une attention particulière à l'accessibilité. Nous sommes fiers 
                de créer un environnement inclusif où chacun peut profiter pleinement de son expérience, faisant de notre lieu un endroit accessible 
                et accueillant pour tous. Venez partager des moments uniques et mémorables avec nous, car ici, tout le monde est le bienvenu. </p>
                <div className="espace-card">
                    <div className='ouvert-icon'>
                        <div className="item1"><img src={process.env.PUBLIC_URL + "/Images/icon-sourd.png"} alt="" /></div>
                        <div className="item2"><img src={process.env.PUBLIC_URL + "/Images/icon-enceinte.png"} alt="" /></div>
                        <div className="item3"><img src={process.env.PUBLIC_URL + "/Images/icon-fauteuil.png"} alt="" /></div>
                        <div className="item3"><img src={process.env.PUBLIC_URL + "/Images/icon-age.png"} alt="" /></div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>

    </>;
}

export default PageAccueil;