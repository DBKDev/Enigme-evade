import React from 'react';
import '../Styles/ReservationDomicile.css'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Agenda from '../Components/Agenda';

const ReservationDomicile = () => {
    return (<>

        <Header />
        <div className="divDomicileReservation">
            <h2>RESERVATION A DOMICILE</h2>
            <div className="DomicileReservationSouligne"></div>
        </div>
        <div className='DomicileReservationContainer'>
            <form className='DomicileReservationFlex'>
                <select id="escapeGame">
                    <option value="" disabled selected>Choisissez votre escape Game</option>
                    <optgroup label="Domicile">
                        <option value="domicile-1">Escape Game 1</option>
                        <option value="domicile-2">Escape Game 2</option>
                        <option value="domicile-3">Escape Game 3</option>
                        <option value="domicile-4">Escape Game 4</option>
                    </optgroup>                    
                </select>


                <select id="difficulty">
                    <option value="" disabled selected>Choisissez votre difficulté</option>
                    <option value="facile">Facile</option>
                    <option value="intermediaire">Intermédiaire</option>
                    <option value="difficile">Difficile</option>
                </select>

                <div className='agendaDom'><Agenda/></div>
                <div className='nomPrenomDomicile'>
                    <input type="text" placeholder='Nom' name={'nom'} />
                    <input type="text" placeholder='Prénom' name={'prenom'} />
                </div>
                <input type="email" placeholder='Adresse email' />
                <input type="text" placeholder="Lieu de l'événement" />
                <input type="number" placeholder='Numéro de téléphone' maxLength={'10'} />
                <select name="" id="nbJoueurDomicile">
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

        <Footer />
    </>);
}

export default ReservationDomicile;