import React, { useContext, useState, useEffect } from 'react';
import '../Styles/MonCompte.css';
import Header from '../Components/Header';
import { toast } from 'react-toastify';
import Footer from '../Components/Footer';
import monCompteService from '../Services/monCompteService';
import GlobalContext from '../Components/GlobalContext';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const MonCompte = () => {
  const { userEmail, user, setUser } = useContext(GlobalContext);
  const [lastRes, setLastRes] = useState([]);
  const formattedDate = lastRes.res_dateHeure
  ? format(new Date(lastRes.res_dateHeure), 'dd-MM-yyyy HH:mm')
  : '';

  const getLastRes = async () => {
    try {
      const response = await monCompteService.getLastRes(userEmail);
      console.log(response.data);
      setLastRes(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  const deleteCompte = async () => {
    try {
      const response = await monCompteService.deleteCompte(userEmail);
      toast.success("Votre compte a bien été supprimé");
      console.log(response);
    } catch (e) {
      console.log(e);
      toast.error("Votre compte n'a pas été supprimé");
    }
  }
  useEffect(() => {
    // Retrieve user data from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, [setUser]);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setUser({ ...user, [name]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await monCompteService.ModifCompte(user);
      toast.success("Votre modification est validé M." + user.user_nom + ' ' + user.user_prenom);
      console.log(response);
    } catch (e) {
      console.log(e);
      toast.error("Votre modification n'est pas validé M." + user.user_nom + ' ' + user.user_prenom);
    }
  };

  useEffect(() => {
    // Store user data in local storage whenever the user object changes
    localStorage.setItem('user', JSON.stringify(user));
    getLastRes();
  }, [user]);

  return (
    <>
      <Header />
      <div className='containerprincipaleMonCompte'>
        <div className='monCompteMargin'>
          <h2>Mon Compte</h2>
          <div className='MonCompteSouligne'></div>
          <p>{user ? user.user_nom : ''} {user ? user.user_prenom : ''}</p>
        </div>
        <div className='MonCompteContainer'>
          <form className='MonCompteFlex'>
            <input
              type='text'
              placeholder='Nom'
              name='user_nom'
              value={user ? user.user_nom : ''}
              onChange={handleChange}
            />
            <input
              type='text'
              placeholder='Prénom'
              name='user_prenom'
              value={user ? user.user_prenom : ''}
              onChange={handleChange}
            />
            <input
              type='email'
              placeholder='Adresse email'
              name='user_email'
              value={user ? user.user_email : ''}
              onChange={handleChange}
            />
            <input
              type='tel'
              placeholder='Numéro de téléphone'
              maxLength={10}
              name='user_telephone'
              value={user ? user.user_telephone : ''}
              onChange={handleChange}
            />
            <input
              type='text'
              placeholder='adresse domicile'
              name='user_adresse'
              value={user ? user.user_adresse : ''}
              onChange={handleChange}
            />
            <input type='submit' value={'MODIFIER MES INFOS'} onClick={handleAdd} />
          </form>
          <div className='reservationMonCompte'>
            <h3>Dernières réservations</h3>
            <div className='info-resa'>
                <h3>{lastRes.nom_escape}</h3>
                <p>Numéro de réservation: {lastRes.res_id}</p>
                <p>{lastRes.res_type}</p>
                <p>Date : {formattedDate}</p>
                <p>Niveau : {lastRes.res_niveau}</p>
                <p>Joueurs : {lastRes.res_nbPersonne}</p>
                <p>Montant : {lastRes.res_montant} €</p>
            </div>
            <button>
              <a href='/MesReservations' className='laclasse-btn-a'>
                Voir plus
              </a>
            </button>
            <Link to={"/"}><input type='submit' value={'SUPPRIMER MON COMPTE'} className='laclasse-btn-a' onClick={deleteCompte} /></Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MonCompte;