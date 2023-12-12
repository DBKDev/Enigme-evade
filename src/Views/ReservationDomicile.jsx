import React, { useEffect, useState } from 'react';
import '../Styles/ReservationDomicile.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Agenda from '../Components/Agenda';
import { toast } from 'react-toastify';
import resaDomService from '../Services/reservationDomicile';
import { format, addMinutes } from 'date-fns';

const ReservationDomicile = () => {
  const [salleDomicile, setSalleDomicile] = useState([]);
  const [resaDom, setResaDom] = useState({
    res_type: 'domicile',
    nom_jeu: '',
    dom_id: '',
    date: '',
    montant: '200',
    nom: '',
    prenom: '',
    email: '',
    lieu: '',
    numero: '',
    nbJoueur: '',
  });

  const handleAgendaDateSelect = (selectedDate) => {
    setResaDom({ ...resaDom, date: selectedDate });
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setResaDom({ ...resaDom, [name]: value });
  };

  const formattedDate = resaDom.date ? format(new Date(resaDom.date), 'dd-MM-yyyy HH:mm:ss') : '';
  
  const handleResaDom = async (e) => {
    e.preventDefault();
    console.log(resaDom);
    try {
        const response = await resaDomService.newReservation(resaDom)
        console.log(response);
        toast.success("Votre réservation est confirmée pour le " + formattedDate)
    } catch (e) {
        console.log(e);
        toast.error("Erreur lors de la réservation")
    }
}


  const getSalleDom = async () => {
    try {
      const response = await resaDomService.salleDom();
      setSalleDomicile(response.data);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSalleDom();
  }, []);

    
    
    return (<>

        <Header />
        <div className="divDomicileReservation">
            <h2>RESERVATION A DOMICILE</h2>
            <div className="DomicileReservationSouligne"></div>
        </div>
        <div className='DomicileReservationContainer'>
            <form className='DomicileReservationFlex'>
                <select id="escapeGame" name='dom_id' value={resaDom.dom_id} onChange={handleChange}>
                    <option value="" disabled selected>Choisissez votre escape Game</option>
                    <optgroup label="Domicile">
                        {salleDomicile.map(dom => {
                            return (
                                <option key={dom.domicile_id} value={dom.domicile_id}>{dom.dom_nom}</option>
                            )
                        })}
                    </optgroup>                    
                </select>


                <select id="difficulty" name='difficulte' value={resaDom.difficulte} onChange={handleChange}>
                    <option value="" disabled selected>Choisissez votre difficulté</option>
                    <option value="facile">Facile</option>
                    <option value="intermediaire">Intermédiaire</option>
                    <option value="difficile">Difficile</option>
                </select>

                <div className='agendaDom'><Agenda onDateSelect={(selectedDate) => handleAgendaDateSelect(selectedDate)} /></div>
                <div className='nomPrenomDomicile'>
                    <input  type="text" placeholder='Nom' name={'nom'} value={resaDom.nom} onChange={handleChange}/>
                    <input type="text" placeholder='Prénom' name={'prenom'} value={resaDom.prenom} onChange={handleChange}/>
                </div>
                <input type="email" placeholder='Adresse email' name='email' value={resaDom.email} onChange={handleChange}/>
                <input type="text" placeholder="Lieu de l'événement"  name='lieu' value={resaDom.lieu} onChange={handleChange}/>
                <input type="number" placeholder='Numéro de téléphone' maxLength={'10'} name='numero' value={resaDom.numero} onChange={handleChange}/>
                <select name="nbJoueur" id="nbJoueurDomicile"  value={resaDom.nbJoueur} onChange={handleChange}>
                    <option value="" disabled selected>Nombres de joueurs</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>

                <input name='envoyer' type="submit" value={'ENVOYER'} onClick={handleResaDom} />
            </form>
        </div>

        <Footer />
    </>);
}

export default ReservationDomicile;