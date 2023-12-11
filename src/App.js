import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from 'react-modal';
import PageAccueil from "./Views/PageAccueil";
import PageContact from "./Views/PageContact";
import MonCompte from "./Views/MonCompte";
import PageDomicile from "./Views/PageDomicile";
import MesReservations from "./Views/MesReservations";
import PageLocalisation from "./Views/PageLocalisation";
import PageDetails from "./Views/PageDetails";
import InterfaceAdmin from "./Views/InterfaceAdmin";
import ReservationDomicile from "./Views/ReservationDomicile";
import DevisProfessionnel from "./Views/DevisProfessionnel";
import ReservationSite from "./Views/ReservationSite";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import GlobalContext from "./Context/GlobalContext";
import { useState, useEffect } from 'react';


// Définir l'élément racine de votre application pour le composant Modal
Modal.setAppElement('#root');






function App() {

  // Initialisez l'état userId en récupérant la valeur depuis le localStorage
  const [userEmail, setUserEmail] = useState(window.localStorage.getItem('userEmail'));

  // Effet pour mettre à jour le localStorage lorsque userId change
  useEffect(() => {
    if (userEmail !== null) {
      localStorage.setItem('userEmail', userEmail.toString());
    } else {
      // Si userId est null, supprimez-le du localStorage
      localStorage.removeItem('userEmail');
    }
  }, [userEmail]);
  return <>
    <GlobalContext.Provider value={{userEmail, setUserEmail}}>
    <BrowserRouter>  
      <Routes>
      <Route path={"/"} element={<PageAccueil/>} />     
        <Route path={"/contact"} element={<PageContact/>} />
        <Route path={"/localisation"} element={<PageLocalisation/>} />
        <Route path={"/devisPro"} element={<DevisProfessionnel/>}/>
        <Route path={"/ReservationSite"} element={<ReservationSite/>}/>
        <Route path={"/details"} element={<PageDetails/>}/>
        <Route path={"/Domicile"} element={<PageDomicile/>}/>
        <Route path={"/monCompte"} element={<MonCompte/>}/>
        <Route path={"/interface"} element={<InterfaceAdmin/>}/>
        <Route path={"/reservationDomicile"} element={<ReservationDomicile/>}/>
        <Route path={"/MesReservations"} element={<MesReservations/>}/>
        <Route path={"/reservationSite"} element={<ReservationSite/>}/>
      </Routes>
    </BrowserRouter>
    </GlobalContext.Provider>
    <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
    />

  </>
}

export default App;
