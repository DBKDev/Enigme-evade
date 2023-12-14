import React, {useContext, useState, useEffect} from 'react';
import '../Styles/MonCompte.css'
import Header from '../Components/Header';
import { toast } from 'react-toastify';
import Footer from '../Components/Footer';
import monCompteService from '../Services/monCompteService';
import GlobalContext from '../Components/GlobalContext';
import testService from '../Services/testService';


const MonCompte = () => {

    const {userEmail, user, setUser} = useContext(GlobalContext);
    const [test, setTest] = useState({});
    console.log(userEmail);

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        setUser({...user, [name]: value });
    }

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const response = await monCompteService.ModifCompte(user)
            toast.success("Votre modification est validé M." + user.user_nom + user.user_prenom)
            
        } catch (e) {
           console.log(e); 
           toast.error("Votre modification n'est pas validé M." + user.user_nom + user.user_prenom)
        }
    }

    const fetchUserByEmail = async () => {
        try {
            const response = await testService.getUserByEmail(userEmail)
            setTest(response.data)
            
    
        } catch (e) {
            console.log(e);
        }
    }

    const LastReservation = async () => {
        try {
            const response = await monCompteService.getLastReservation(email)
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    }
    
    useEffect (() => {
        fetchUserByEmail();
        LastReservation();
    },[])




    return (
        <>

        <Header/>
            <div className='containerprincipaleMonCompte'>
            <div className='monCompteMargin'>
                <h2>Mon Compte</h2>
                <div className='MonCompteSouligne'></div>
                <p>{test.user_nom} {test.user_prenom}</p>
            </div>
            <div className='MonCompteContainer'>
                {/* <div className='formulaireMonCompte'>  */}
                    <form className='MonCompteFlex'>
                        <input type="text" placeholder='Nom' name='user_nom' value={user.user_nom} onChange={handleChange}/>
                        <input type="text" placeholder='Prénom' name='user_prenom' value={user.user_prenom} onChange={handleChange}/>
                        <input type="email" placeholder='Adresse email'  name='user_email' value={user.user_email} onChange={handleChange}/>
                        <input type="tel" placeholder='Numéro de téléphone' maxLength={10} name='user_telephone' value={user.user_telephone} onChange={handleChange}/>
                        <input type="text" placeholder='adresse domicile' name='user_adresse' value={user.user_adresse} onChange={handleChange}/>
                        <input type="submit" value={'MODIFIER MES INFOS'} onClick={handleAdd}/>
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
