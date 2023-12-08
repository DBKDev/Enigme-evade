import React from 'react';
import "../Styles/ReservationSite.css"
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Agenda from '../Components/Agenda';


const ReservationSite = () => {
    return ( <>

    <Header/>
    <div className='reservationSiteMargin'>
            <h2>RESERVATION SUR PLACE</h2>
            <div className='reservationSiteSouligne'></div>
        </div>
        <div className='reservationSiteContainer'>
        <form className='reservationSiteFlex'>
            <select id="escapeGameSite">
                <option value="" disabled selected>Choisissez votre escape Game</option>
                <optgroup label="Sur Site">
                    <option value="site-1">Escape Game 1</option>
                    <option value="site-2">Escape Game 2</option>
                    <option value="site-3">Escape Game 3</option>
                    <option value="site-4">Escape Game 4</option>
                </optgroup>
            </select>

    
            <select id="difficultySite">
                <option value="" disabled selected>Choisissez votre difficulté</option>
                <option value="facile">Facile</option>
                <option value="intermediaire">Intermédiaire</option>
                <option value="difficile">Difficile</option>
            </select>
                <div className='agendaSite'>{<Agenda/>}</div>
            <div className='nomPrenomReservationSite'> 
            <input type="text" placeholder='Nom' name={'nom'}/>
            <input type="text" placeholder='Prénom' name={'prenom'}/>
            </div>
            <input type="email"  placeholder='Adresse email'/>
            <input type="number" placeholder='Numéro de téléphone' maxLength={'10'}/>
            <select name="" id="nbJoueurSite">
                <option value="" disabled selected>Nombres de joueurs</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
            </select>

            <input type="submit" value={'ENVOYER'} />
        </form>
        </div>
        
        {/* <Footer/> */}
    
    </> );
}
 
export default ReservationSite;