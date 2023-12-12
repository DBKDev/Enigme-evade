import React, {useContext, useState, useEffect} from 'react';
import '../Styles/MonCompte.css'
import Header from '../Components/Header';
import { toast } from 'react-toastify';
import Footer from '../Components/Footer';
import monCompteService from '../Services/monCompteService';
import GlobalContext from '../Components/GlobalContext';


const MonCompte = () => {

    const {userEmail, user, setUser} = useContext(GlobalContext);

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        setUser({...user, [name]: value });
    }

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const response = await monCompteService.ModifCompte(user)
            toast.success("Votre modification est validé M." + user.user_nom + user.user_prenom)
            console.log(response);
        } catch (e) {
           console.log(e); 
           toast.error("Votre modification n'est pas validé M." + user.user_nom + user.user_prenom)
        }
    }


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
                        <input type="text" placeholder='Nom' name='user_nom' value={user.user_nom} onChange={handleChange}/>
                        <input type="text" placeholder='Prénom' name='user_prenom' value={user.user_prenom} onChange={handleChange}/>
                        <input type="email" placeholder='Adresse email' type="hidden" name='user_email' value={user.user_email} onChange={handleChange}/>
                        <input type="tel" placeholder='Numéro de téléphone' maxLength={10} name='user_telephone' value={user.user_telephone} onChange={handleChange}/>
                        <input type="text" placeholder='adresse domicile' name='user_adresse' value={user.user_adresse} onChange={handleChange}/>
                        <input type="submit" value={'MODIFIER MES INFOS'} onClick={handleAdd}/>
                    </form>
                {/* </div> */}
                <div className="reservationMonCompte">
                    <h3>Dernières réservations</h3>
                    <div className='info-resa'></div>
                    <button>Voir plus</button>
                    <input type="submit" value={'SUPPRIMER MON COMPTE'} />
                </div>
            </div>
            </div>
            <Footer/>
        </>
    );
}
 
export default MonCompte;
