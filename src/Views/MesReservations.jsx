import React, {useContext, useState, useEffect} from 'react';
import Header from '../Components/Header';
import '../Styles/MesReservations.css'
import TableComponent from "../Components/TableauSiteComponent"
import TableComponentDomicile from '../Components/TableauDomicileComponent';
import GlobalContext from '../Components/GlobalContext';
import monCompteService from '../Services/monCompteService';
import { toast } from 'react-toastify';


const MesReservations = () => {

    const { userEmail, user, setUser } = useContext(GlobalContext);

    useEffect(() => {
        // Retrieve user data from local storage
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
          setUser(storedUser);
        }
      }, [setUser]);

      useEffect(() => {
        // Store user data in local storage whenever the user object changes
        localStorage.setItem('user', JSON.stringify(user));
      }, [user]);

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


    return <>
        <Header />
        <div className="containerPrincipalReservation">
            <div className="marginReservation">
                <h2>Mes réservations</h2>
                <div className="souligneReservation"></div>
                <p>{user ? user.user_nom : ''} {user ? user.user_prenom : ''}</p>
            </div>
            <div className="containerReservationFlex">
                <div>
                    <h1 className='Titre-réservationsite'>Réservation sur Place</h1>
                    <TableComponent />
                </div>

                <div>
                    <h1 className='Titre-réservationsite'>Réservation à Domicile</h1>
                    <TableComponentDomicile />
                </div>
            </div>
        </div>
    </>;
}

export default MesReservations;