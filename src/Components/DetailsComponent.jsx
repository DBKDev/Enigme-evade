import React from 'react';
import '../Styles/Details.css'


const DetailsComponent = () => {
    return <>

    <div className='details_all_container'>

        <div className='titre_container'>
            <h2 className='titre_details'>Titre escape</h2>
            <div className='separation_titre_details'></div>
        </div>

        <div className='site_domicile'>
            <p className='site_domicile_text'>SUR SITE</p>
        </div>
        <div className='details_container'>

            {/* DIV QUI CONTIENT LES 3 IMAGES */}
            <div className='image_container'>
                <div className='img_container'>
                    <div className='img1'></div>
                    <div className='img2'></div>
                    <div className='img3'></div>
                </div>
            </div>

            {/* DIV QUI CONTIENT LE SYNOPSIS ET L'OBJECTIF */}
            <div className='synopsis_obj_container'>
                <div className='synopsis'>
                    <div className='synopsis_titre'>
                        <h2>Synopsis</h2>
                    </div>
                    <div className='synopsis_text'>
                        <p>
                            Plongez dans les intrigues de Westeros en tant que prétendants au Trône de Fer. 
                            Résolvez des énigmes, déjouez des complots et trouvez le chemin vers le trône pour 
                            revendiquer votre droit au pouvoir.
                            </p>
                    </div>
                </div>

                <div className='objectif'>
                    <div className='objectif_titre'>
                        <h2>Objectif final</h2>
                    </div>
                    <div className='objectif_text'>
                        <p>
                            Conquérir le Trône de Fer en surmontant les obstacles et en résolvant les énigmes 
                            dans un décor inspiré de Game of Thrones. Le temps presse, l'hiver arrive. 
                            Êtes-vous prêt à jouer le jeu?
                        </p>
                    </div>
                </div>
                    
                </div>

            <div className='temps_difficulte_container'>
                <div className='temps_container'>
                    <div className='temps_image'>
                    <img src={process.env.PUBLIC_URL + "/Images/timer.png"} alt="" />
                    </div>
                    
                        <p className='temps_text'>1h30</p>
                    
                </div>

                <div className='difficulte_container'>
                    <div className='difficulte_titre'>
                        <h3>Difficulté :</h3>
                    </div>
                    <div className='difficulte_text'>
                        <p> FACILE</p>
                        <p> INTERMÉDIAIRE</p>
                        <p> DIFFICILE</p>
                    </div>
                </div>
            </div>
            <button className="bouton_reservation_details" type="submit">RESERVER</button>
        </div>

    </div>
    
    </>;
}
 
export default DetailsComponent;