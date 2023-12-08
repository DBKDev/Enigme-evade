import React, { useState, useEffect } from 'react';
import '../Styles/FormContact.css'
import Header from './Header';
import MapContact from './Map';

const LocalisationComponent = () => {
    return <>

        {/* PARTIE MAP */}
        <div id='page_form_contact'>
            <div className='map_container'>

                <div className='map_titre'>
                    <div className='header_map'>

                        <h1 className='titre_map'>OÙ NOUS TROUVER ?</h1>

                        <div className='separation_map'></div>
                    </div>
                </div>

                <div className='info_adresse_container'>
                    <div className='adresse_container'>
                        <p><span className='text_map'> Adresse : 46 rue faidherbe - Lille (59350)</span></p>
                        <p><span className='text_map'>Numéro : 0666666666</span></p>
                        <p><span className='text_map'>Mail : tbialasik@fcdigital.fr</span></p>
                        <p><span className='text_map'>Horaires : 9h-12h / 14h-00h</span></p>
                    </div>

                    <div className='map_google'>
                        {/* <img className='map_google_image' src={process.env.PUBLIC_URL + "/Images/map.png"} alt="" /> */}
                        <MapContact/>
                    </div>
                </div>
            </div>


        </div>

    </>;
}

export default LocalisationComponent;