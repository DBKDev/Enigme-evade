import React from 'react';

const MonCompte = () => {
    return (
        <>
            <div className='monCompteMargin'>
                <h2>Mon Compte</h2>
                <div className='MonCompteSouligne'></div>
            </div>
            <div className='MonCompteContainer'>
                <div className='formulaireMonCompte'> 
                    <form className='MonCompteFlex'>
                        <input type="text" placeholder='Nom' />
                        <input type="text" placeholder='Prénom' />
                        <input type="email" placeholder='Adresse email' />
                        <input type="tel" placeholder='Numéro de téléphone' maxLength={10} />
                        <input type="text" placeholder='adresse domicile' />
                        <input type="submit" value={'MODIFIER MES INFOS'}/>
                        <input type="submit" value={'SUPPRIMER MON COMPTE'} />
                    </form>
                </div>
                <div className="reservationMonCompte">
                    <h3>Dernières réservations</h3>
                    <div className='info-resa'></div>
                    <button>Voir plus</button>
                </div>
            </div>
        </>
    );
}
 
export default MonCompte;
