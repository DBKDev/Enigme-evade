import React from 'react';
import Slideaccueil from '../Components/Slideraccueil';
import Header from '../Components/Header';
import "../Styles/PageAccueil.css"

const PageAccueil = () => {
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
                <p className='escape-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis in lectus ligula. Donec tincidunt a massa sit amet finibus.
                    Nunc scelerisque aliquet feugiat. Vestibulum nec lectus sed nibh iaculis
                    vehicula vel eu risus. Suspendisse rutrum ac arcu id ultricies.
                    Quisque suscipit diam massa, a placerat tellus varius vel. Sed maximus
                    auctor vestibulum. </p>
                <div className="espace-card"></div>
            </div>

{/* Tarif */}

            <div className="escape-tarif">
                <div className='tarif-titre'>
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
                <div className="espace-card"></div>
            </div>
        </div>
    </>;
}

export default PageAccueil;