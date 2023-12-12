import React, { useEffect,useState } from 'react'
import "../Styles/ReservationSite.css"
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Agenda from '../Components/Agenda';
import { toast } from 'react-toastify';
import reservationsiteservice from '../Services/reservationSiteService';
import reservationSiteService from '../Services/reservationSiteService';

const ReservationSite = () => {
    const [getSalleSite, setGetSalleSite] = useState([]);
    const [resSite, setResSite] = useState({        
        res_type : "site",
        res_dateHeure: "2023-12-09 00:00:00",
        res_nbPersonne:"",
        res_niveau:"",
        user_email:"",
        res_nom:"",
        res_prenom:"",
        res_numero:"",
        res_montant:"200",
        salle_id:"",
    });

    const handleChangeRes = (e) => {
        const {name, value} = e.currentTarget;
        setResSite({...resSite, [name] : value})
        console.log(resSite);
    }

    const handleAddRes = async (e) => {
        e.preventDefault()
        try {
            const response = await reservationsiteservice.AddReservationSite(resSite)
            toast.success("Votre inscription est confirmé M." + resSite.res_nom)
        } catch (e) {
            console.log(e)
        }
    }


// Afficher le nom des salles:

    const getSalleSites = async () => {
        try {
            const response = await reservationSiteService.GetNomsite()
            setGetSalleSite(response.data);
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(()=>{
        getSalleSites()
    },[])


    return ( <>

        


    <Header/>
    <div className='reservationSiteMargin'>
            <h2>RESERVATION SUR PLACE</h2>
            <div className='reservationSiteSouligne'></div>
        </div>
        <div className='reservationSiteContainer'>
        <form className='reservationSiteFlex'>
            <select id="escapeGameSite">
                <option disabled selected name="salle_id" value={resSite.salle_id} onChange={handleChangeRes}>Choisissez votre escape Game</option>
                <optgroup label="Sur Site">                    
                    {getSalleSite.map(salle => {
                        return (
                            <option key={salle.salle_id} value={salle.salle_id} >{salle.salle_nom}</option>                                                                                  
                        )
                    })}
                </optgroup>
                
            </select>
            
    
            <select id="difficultySite" name="res_niveau" value={resSite.res_niveau} onChange={handleChangeRes} >
                <option value="" disabled selected >Choisissez votre difficulté</option>
                <option value="facile">Facile</option>
                <option value="intermediaire">Intermédiaire</option>
                <option value="difficile">Difficile</option>
            </select>

                <div className='agendaSite' name="res_date" onChange={handleChangeRes}>{<Agenda/>}</div>
            <div className='nomPrenomReservationSite'> 
            <input type="text" placeholder='Nom' name='res_nom' value={resSite.res_nom} onChange={handleChangeRes}/>
            <input type="text" placeholder='Prénom' name='res_prenom' value={resSite.res_prenom} onChange={handleChangeRes}/>
            </div>
            <input type="email"  name="user_email" placeholder='Adresse email' value={resSite.user_email} onChange={handleChangeRes}/>
            <input type="number" name="res_numero" placeholder='Numéro de téléphone' maxLength={'10'} value={resSite.res_numero} onChange={handleChangeRes}/>
            
            <select name="res_nbPersonne" id="nbJoueurSite" value={resSite.res_nbPersonne} onChange={handleChangeRes}>
                <option value="" disabled selected>Nombres de joueurs</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
            </select>

            <input type="submit" value={'ENVOYER'} onClick={handleAddRes}/>
        </form>
        </div>
        
        <Footer/>
    
    </> );
}
 
export default ReservationSite;