import React from 'react';
import '../Styles/MonCompte.css'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const MonCompte = () => {
    return (
        <>

        <Header/>
            <div className='containerprincipaleMonCompte'>
            <div className='monCompteMargin'>
                <h2>Mon Compte</h2>
                <div className='MonCompteSouligne'></div>
                <p>Nom Prenom</p>
            </div>
            <div className='MonCompteContainer'>
                {/* <div className='formulaireMonCompte'>  */}
                    <form className='MonCompteFlex'>
                        <input type="text" placeholder='Nom' />
                        <input type="text" placeholder='Prénom' />
                        <input type="email" placeholder='Adresse email' />
                        <input type="tel" placeholder='Numéro de téléphone' maxLength={10} />
                        <input type="text" placeholder='adresse domicile' />
                        <input type="submit" value={'MODIFIER MES INFOS'}/>
                    </form>
                {/* </div> */}
                <div className="reservationMonCompte">
                    <h3>Dernières réservations</h3>
                    <div className='info-resa'></div>
                    <button><a href="/MesReservations" className='laclasse-btn-a'>Voir plus</a></button>
                    <input type="submit" value={'SUPPRIMER MON COMPTE'} />
                </div>
            </div>
            </div>
            <Footer/>
        </>
    );
}
 
export default MonCompte;
