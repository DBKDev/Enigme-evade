import React from 'react';
import Header from '../Components/Header';
import '../Styles/MesReservations.css'


const MesReservations = () => {
    return (<>
    <Header/>
    <div className="containerPrincipalReservation">
        <div className="marginReservation">
            <h2>Mes réservations</h2>
            <div className="souligneReservation"></div>
            <p>Nom Prénom</p>
        </div>
        <div className="containerReservationFlex">
            <div className="mesReservationSite">
                <h3>sur site</h3>
                <div>
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                </div>
                <div>
                <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                </div>
                <div>
                <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                </div>
                <div>
                <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                </div>
            </div>
            <div className="mesReservationDomicile">
                <h3>à domicile</h3>
                <div>
                <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                </div>
                <div>
                <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                </div>
                <div>
                <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                </div>
                <div>
                <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                </div>
            </div>
        </div>
    </div>
    </> );
}
 
export default MesReservations;