import React from 'react';
import Header from '../Components/Header';
import '../Styles/MesReservations.css'
import TableComponent from "../Components/TableauSiteComponent"
import TableComponentDomicile from '../Components/TableauDomicileComponent';


const MesReservations = () => {


    return <>
        <Header />
        <div className="containerPrincipalReservation">
            <div className="marginReservation">
                <h2>Mes réservations</h2>
                <div className="souligneReservation"></div>
                <p>Nom Prénom</p>
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